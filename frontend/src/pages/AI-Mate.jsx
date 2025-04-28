import React, { useState } from 'react';
import Groq from 'groq-sdk';
import { motion } from 'framer-motion';

const groq = new Groq({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export default function AIMate() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am AI-Mate, your travel assistant. How can I help you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userMessage.trim() || loading) return;

    // Add user message
    const userMessageObj = { sender: 'user', text: userMessage };
    setMessages(prev => [...prev, userMessageObj]);
    setUserMessage('');
    
    try {
      setLoading(true);
      
      // Add loading indicator
      setMessages(prev => [...prev, { sender: 'bot', text: '...', loading: true }]);

      // Get AI response
      const response = await groq.chat.completions.create({
        model: "llama3-70b-8192",
        temperature: 0.7,
        messages: [{
          role: "system",
          content: `You are a friendly travel expert. Provide detailed, personalized travel suggestions. 
          Format responses in clear, conversational English. Include:
          - Destination highlights
          - Best time to visit
          - Budget tips
          - Local experiences
          - Safety considerations`
        }, {
          role: "user",
          content: userMessage
        }]
      });

      // Remove loading indicator and add actual response
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: response.choices[0].message.content }
      ]);
      
    } catch (error) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gray-700 px-6 py-4 text-center">
          <h1 className="text-2xl font-bold text-white">AI-Mate</h1>
          <p className="text-gray-400 text-sm">Your travel chatbot assistant</p>
        </div>

        {/* Chat Window */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-800 space-y-4 h-96">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-600 text-gray-200'
                } ${message.loading ? 'animate-pulse' : ''}`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-gray-700 px-4 py-3 border-t border-gray-600">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              className="flex-grow px-6 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}