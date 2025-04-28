import React, { useState } from 'react';

const TourDetails = () => {
    const [priceRange, setPriceRange] = useState(1000);
    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [tags, setTags] = useState([]);

    const handleFilter = () => {
        alert(`Filters Applied:\nPrice Range: ${priceRange}\nDuration: ${duration}\nTime: ${time}\nTags: ${tags.join(', ')}`);
    };

    const handleTagChange = (tag) => {
        setTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 px-8 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Tour Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Filter Section */}
                <div className="col-span-1 bg-white p-6 shadow rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Filter By</h2>

                    {/* Price Range */}
                    <div className="mb-4">
                        <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
                            Price Range: ${priceRange}
                        </label>
                        <input
                            type="range"
                            id="priceRange"
                            min="100"
                            max="20000"
                            step="100"
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="w-full mt-2"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>BDT 0</span>
                            <span>BDT 20,000</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-700">Duration</h3>
                        <div className="space-y-2 mt-2">
                            {['Less than 6 hours', '6 - 12 hours', '12 - 24 hours', '24+ hours'].map((option) => (
                                <div key={option}>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="duration"
                                            value={option}
                                            checked={duration === option}
                                            onChange={() => setDuration(option)}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">{option}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Time */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-700">Time</h3>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            {['00-06', '06-12', '12-18', '18-00'].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setTime(option)}
                                    className={`py-2 px-3 rounded-lg border ${time === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-700">Tags</h3>
                        <div className="space-y-2 mt-2">
                            {['Family Friendly', 'Beach Activity', 'Adventure', 'Private Tour'].map((tag) => (
                                <div key={tag}>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={tags.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                            className="form-checkbox text-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">{tag}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reset Filters Button */}
                    <button
                        onClick={handleFilter}
                        className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-400 transition"
                    >
                        Apply Filters
                    </button>
                </div>

                {/* Details Section */}
                <div className="col-span-3">
                    <div className="bg-white p-6 shadow rounded-lg mb-6">
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="Tour"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-3xl font-bold mb-2">Tour Name</h2>
                        <p className="text-gray-700 mb-4">Description of the tour goes here.</p>
                        <p className="text-blue-500 font-semibold">Price: $1200</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
