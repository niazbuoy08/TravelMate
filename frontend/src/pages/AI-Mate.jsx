import React, { useState } from 'react';

export default function AIMate() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am AI-Mate, your travel assistant. How can I help you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleSend = () => {
    if (userMessage.trim() === '') return;

    const userMessageObj = { sender: 'user', text: userMessage };
    const botResponse = { sender: 'bot', text: generateResponse(userMessage) };

    setMessages((prevMessages) => [...prevMessages, userMessageObj, botResponse]);
    setUserMessage('');
  };

  const generateResponse = (message) => {
    // Simple response logic (can be expanded or replaced with AI integration)
    if (message.toLowerCase().includes('beach')) {
      return 'You should visit the Maldives for its stunning beaches and crystal-clear waters.';
    } else if (message.toLowerCase().includes('adventure')) {
      return 'How about exploring the Grand Canyon or going on a safari in Africa?';
    } else {
      return "I'm here to help! Please tell me what kind of places you're interested in.";
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
        <div className="flex-1 p-6 overflow-y-auto bg-gray-800 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-600 text-gray-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

         {/* Input Area */}
         <div className="bg-gray-700 px-4 py-3 border-t border-gray-600">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              className="flex-grow px-6 py-3 rounded-lg bg-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}