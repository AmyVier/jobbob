import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24 bg-beige w-100%">
      <div className="flex color-black w-100%">
      
      <i className="bi bi-arrow-right-circle-fill color-black icon-105"></i>
      
      <i className="bi bi-arrow-90deg-right relative top-0 left-0"></i>
      <div className=" bg-white h-30 w-200 border-2 border-black name rounded-sm">
        <input className = "object-contain" type="text"/>

        <div className="relative inline-block text-left">
    <div>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
    Select an Option
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zM7 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clip-rule="evenodd" />
    </svg>
    </button>
    </div>
<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      
     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option A</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option B</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option C</a>
   </div>
   </div>
    </div>
      </div>
      </div>
    </main>
  );
}
