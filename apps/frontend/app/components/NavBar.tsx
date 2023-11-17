'use client'
import { useEffect, useState } from "react";
import { functions, init } from "../firebase";
import { httpsCallable } from "firebase/functions";

export const NavBar = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init().then(() => setLoading(false));
  });
  
  const onButtonPress = async () => {
    console.log("hi")
    try {
      // Get a reference to the Firebase Cloud Function
      const helloWorldFunction = httpsCallable(functions, 'helloWorld');

      // Call the function and await the result
      const result = await helloWorldFunction();

      // Handle the result as needed
      console.log('Result from helloWorld function:', result.data);
    } catch (error) {
      console.log('Error calling helloWorld function:', error);
    }
  };


  return (
    <div className="">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Startup Analyser
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Open portfolio
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onButtonPress}
            >
              LinkedIn
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
