"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Define the list of major US cities
const majorUSCities = [
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


export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    // Filter the cities that match the user's input
    const matchingCities = majorUSCities.filter(city =>
      city.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(matchingCities);
  };

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.svg
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="block w-[100px] row-start-2 mb-8 md:mb-6"
            viewBox="0 0 87 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[10vw] md:text-[80px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            <br />
            <span className="text-[#407BBF] text-6xl">Pickup ⚽</span>
            <br /> {/* Add a line break */}
            <span className="font-inter text-[#1E2B3A] text-6xl ">games, on demand</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder=" Enter Your City"
                  className="rounded-md pl-8 pr-10 py-2 text-[13px] font-semibold bg-[#1E2B3A] text-white border border-[#061530] focus:border-[#407BBF] outline-none w-full backdrop-blur-md"
                  style={{
                    backdropFilter: "blur(10px) brightness(80%)",
                  }}
                  value={userInput}
                  onChange={handleInputChange}
                />
                <a
                  className="absolute left-[-12] top-1/2 transform -translate-y-1/2 rounded-md bg-[#1E2B3A] w-7 h-7 text-white flex items-center justify-center focus:outline-none hover:bg-[#0D2247] backdrop-blur-md"
                  onClick={() => {
                    // Add your search functionality here
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </div>

              {suggestions.length > 0 && (
                <div className="absolute z-10 mt-2 w-fit border border-gray-300 rounded-b-md shadow-lg bg-white">
                  {suggestions.map((city, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        // Set the selected suggestion as the input value
                        setUserInput(city);
                        setSuggestions([]);
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/demo"
                className="group rounded-md px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#407BBF] text-white no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Find Games  </span>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full ">
          <p className="text-white/80 text-base md:text-lg ml-20  font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            © 2024 Pickup. All rights reserved.
          </p>
        </div>
      </div>
    </AnimatePresence>
  );
}
