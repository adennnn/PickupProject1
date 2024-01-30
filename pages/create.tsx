import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CreateMatch = () => {
  const router = useRouter();

  const [selectedLocation, setSelectedLocation] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const cities = [
    'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'San Francisco',
  'Charlotte',
  'Indianapolis',
  'Seattle',
  'Denver',
  'Washington',
  'Boston',
  'El Paso',
  'Nashville',
  'Oklahoma City',
  'Las Vegas',
  'Detroit',
  'Portland',
  'Memphis',
  'Louisville',
  'Milwaukee',
  'Baltimore',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Mesa',
  'Sacramento',
  'Atlanta',
  'Kansas City',
  'Colorado Springs',
  'Miami',
  'Raleigh',
  'Omaha',
  'Long Beach',
  'Virginia Beach',
  'Oakland',
  'Minneapolis',
  'Tulsa',
  'Arlington',
  'Tampa',
  'New Orleans',
  'Wichita',
  'Cleveland',
  'Bakersfield',
  'Aurora',
  'Anaheim',
  'Honolulu',
  'Santa Ana',
  'Riverside',
  'Corpus Christi',
  'Lexington',
  'Henderson',
  'Stockton',
  'Saint Paul',
  'Cincinnati',
  'St. Louis',
  'Pittsburgh',
  'Greensboro',
  'Lincoln',
  'Anchorage',
  'Plano',
  'Orlando',
  'Irvine',
  'Newark',
  'Durham',
  'Chula Vista',
  'Toledo',
  'Fort Wayne',
  'St. Petersburg',
  'Laredo',
  'Jersey City',
  'Chandler',
  'Madison',
  'Lubbock',
  'Scottsdale',
  'Reno',
  'Buffalo',
  'Gilbert',
  'Glendale',
  'North Las Vegas',
  'Winston-Salem',
  'Chesapeake',
  'Norfolk',
  'Fremont',
  'Garland',
  'Irving',
  'Hialeah',
  'Richmond',
  'Boise',
  'Spokane',
  'Baton Rouge'
  ];

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocation(value);

    // Filter cities based on user input
    const matchingCities = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setCitySuggestions(matchingCities);
  };

  const handleLocationSelect = (city) => {
    setSelectedLocation(city);
    setCitySuggestions([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const gameData = {
      title: event.target.elements.title.value,
      info: event.target.elements.info.value,
      location: selectedLocation,
      phone: event.target.elements.phone.value,
      name: event.target.elements.name.value,
    };

    localStorage.setItem('gameData', JSON.stringify(gameData));
    router.push('/demo');
  };

  return (
    <div>
      <nav className="flex justify-between p-4 bg-[#407BBF] text-white">
        <div className="text-2xl font-bold">Pickup</div>
        <Link href="/demo" legacyBehavior>
          <a className="rounded-md px-4 py-2 text-[13px] font-semibold bg-[#f5f7f9] text-[#1E2B3A]">Join Game</a>
        </Link>
      </nav>

      <form onSubmit={handleSubmit} className="ml-20 mr-20 mt-5">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Game Title ⚽ </label>
          <input type="text" name="title" id="title" className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Make it pop" />
        </div>

        <div className="mb-4">
          <label htmlFor="info" className="block text-sm font-medium text-gray-700">Info ℹ️</label>
          <textarea id="info" name="info" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Share games rules & additional info"></textarea>
        </div>

        <div className="mb-4 relative">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location 📍</label>
          <input
            type="text"
            name="location"
            id="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Location"
          />
          {citySuggestions.length > 0 && (
            <ul className="absolute z-10 mt-2 py-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              {citySuggestions.map((city) => (
                <li
                  key={city}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleLocationSelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Enter Your Phone #</label>
          <input type="text" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Phone #" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Your First Name</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="John Doe" />
        </div>

        <div className="flex justify-end gap-x-6 mb-2">

        <button type="button" className="text-sm font-semibold text-gray-900">
  <Link href="/">Cancel</Link>
</button>

          <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Game</button>
        </div>

        
      </form>
    </div>
  );
}

export default CreateMatch;
