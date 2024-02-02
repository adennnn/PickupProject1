import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Confirm() {
  const [open, setOpen] = useState(true);
  const [isCopied, setIsCopied] = useState(false); // Track if the link is copied
  const router = useRouter();

  const handleCloseModal = () => {
    setOpen(false);
    router.push('/'); // Redirect to the event card page or any other appropriate route
  };

  const handleCopyToClipboard = () => {
    const dummyLink = 'https://www.pickup.pw'; // Replace with your actual link
    navigator.clipboard.writeText(dummyLink).then(function() {
      setIsCopied(true); // Set isCopied to true when the link is copied
    });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={handleCloseModal}>
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative bg-white w-full max-w-md p-4 rounded-lg shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <p>✅</p>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  You've successfully joined the match
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your phone # will be used to remind you when the match is about to start!
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Share this link with other players:
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-md p-1 focus:outline-none"
                    value="https://www.pickup.pw" // Replace with your actual link
                    readOnly
                  />
                  <button
                    type="button"
                    className="ml-2 px-2 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 focus:outline-none"
                    onClick={handleCopyToClipboard}
                    disabled={isCopied} // Disable the button if the link is already copied
                  >
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                {isCopied && (
                  <p className="text-sm text-blue-500 mt-1">
                    Copied to clipboard
                  </p>
                )}
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={handleCloseModal}
                >
                  Find More Games
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
