import { useState } from 'react';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    // Search functionality is handled here
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch}>
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search recipes/dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex mt-4 justify-center">
        <button className="mx-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          Dairy Free
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          Vegetarian
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          Diabetes Friendly
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
          CKD Friendly
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
