import React, { useEffect, useState, Fragment } from 'react'; // Fixed the import here
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

function EventCard() {
  const [gameData, setGameData] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false); // State to track whether the event is deleted
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const router = useRouter();

  useEffect(() => {
    // Retrieve game data from Local Storage
    const storedGameData = JSON.parse(localStorage.getItem('gameData'));
    if (storedGameData) {
      setGameData(storedGameData);
    }
  }, []);

  const handleReserveClick = () => {
    router.push('/app/page'); // Adjust as needed
  };

  const handleButtonClick = () => {
    router.push('/confirm'); // Navigate to confirm.tsx
  };

  const handleDeleteClick = () => {
    // Implement the logic to delete the event data
    // For example, you can remove it from Local Storage or make an API call
    // After deleting, update the state to reflect the deletion
    // Replace the following line with your deletion logic
    // Example: localStorage.removeItem('gameData'); setIsDeleted(true);
    alert('Event deleted. Implement deletion logic here.');
    setIsDeleted(true);
    openModal(); // Open the modal after deleting
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isDeleted) {
    return (
      <div>
        {/* Navigation Bar */}
        <nav className="flex justify-between p-4 bg-[#407BBF] text-white">
        <Link href="/" className="text-2xl font-bold">
            <span className="">Pickup</span>
          </Link>
   
          <Link href="/create" className="group rounded-md px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75">
            <span className="mr-2">Create Game</span>
          </Link>
        </nav>
        <div className="text-4xl text-center mt-10"> No matches yet, Create one!</div>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex justify-between p-4 bg-[#407BBF] text-white">
        <div className="text-2xl font-bold">Pickup</div>
        <Link href="/create" className="group rounded-md px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75">
          <span className="mr-2">Create Game</span>
        </Link>
      </nav>

      {/* Event Card with Dynamic Data */}
      <div className="flex flex-col" style={{ maxWidth: '480px', margin: '40px' }}>
        <div className="no-underline text-black flex-1 flex items-center mb-4">
          <div className="" style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '50%', marginRight: '10px' }}>
            {/* Placeholder for an image or avatar */}
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'rgb(0, 0, 0)', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold leading-tight">{gameData?.name}</h3>
          </div>
        </div>

        <div className="" style={{ height: '200px', overflow: 'hidden', borderRadius: '10px' }}>
          {/* Placeholder for event image */}
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'rgb(30, 43, 58)', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-semibold leading-tight">{gameData?.title}</h2>
          <div className="text-xl mt-2">Jan 1st, 2024 12:00 AM</div>
          <div className="flex items-center text-lg mt-2">
            <p className="leading-tight">📍 {gameData?.location}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          <button onClick={handleButtonClick} type="button" className="rounded h-12 px-6 text-sm font-semibold text-black outline-double shadow-sm hover:bg-blue-300">
            Join game
          </button>
          <button onClick={handleDeleteClick} type="button" className="rounded h-12 px-6 text-sm font-semibold text-white bg-red-500 hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="flex items-center justify-center min-h-screen p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform transition-all sm:max-w-sm sm:w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                      Match Deleted Successfully
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">The match has been deleted.</p>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center w-1/2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
                      onClick={() => router.push('/create')}
                    >
                      Create Match
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-1/2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default EventCard;
