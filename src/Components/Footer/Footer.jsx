import React from 'react'

function Footer() {
   return (
  <footer className="bg-green-400 rounded-lg shadow-sm my-2 dark:bg-gray-800">
    <div className="w-full mx-auto p-4 text-center md:flex md:items-center md:justify-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>. All Rights Reserved.
      </span>
    </div>
  </footer>
);

}

export default Footer
