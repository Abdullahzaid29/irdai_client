import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar({ handlelogout }) {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <div>
      <nav className="w-full bg-orange-400 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-2 md:block">
              {/* LOGO */}
           <a className="inline-flex items-center">
          <Image
            src="/logo.jpg"
            alt="app logo"
            width={100}
            height={12}
            className={"pt-1 px-3 mb-2 rounded-1xl cursor-pointer"}
            priority
          />
          <span className="text-xl text-white font-bold tracking-wide">
            IRDAC
          </span>
        </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      // clip-rule="evenodd"
                    ></path>
                  </svg>
                  ) : (
                    <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      // clip-rule="evenodd"
                    ></path>
                  </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-5 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
                     {/* <ul className=" px-28 py-6 justify-end flex space-x-10 lg:float-row " >
            <li className="cursor-pointer text-sm hover:text-white pb-6 ">Home</li>
            <li className="cursor-pointer text-sm  hover:text-white" >
            <Link href="https://irdai.gov.in/">About us</Link>
            </li>
            <li className="cursor-pointer text-sm  hover:text-white">
              Contact us
            </li>
            <li className="cursor-pointer text-sm  hover:text-white">
              Support
            </li>
            <li className="cursor-pointer text-sm  hover:text-white">
              LOG OUT
            </li>
          </ul> */}
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-m  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-white  md:hover:text-white md:hover:bg-transparent">
                  <Link href="/home" onClick={() => setNavbar(!navbar)}>
                  Home
                  </Link>
                </li>
                <li className="pb-6 text-m  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white  border-white  md:hover:text-white md:hover:bg-transparent">
                  <Link href="https://irdai.gov.in/" onClick={() => setNavbar(!navbar)}>
                  About us
                  </Link>
                </li>
                <li className="pb-6 text-m  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white  border-white  md:hover:text-white md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact us

                  </Link>
                </li>
                <li className="pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white  border-white  md:hover:text-white md:hover:bg-transparent">
                  <Link href="#Support" onClick={() => setNavbar(!navbar)}>
                  Support                  </Link>
                </li>
                <li className="pb-6 text-m py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white  border-white  md:hover:text-white md:hover:bg-transparent">
                  <Link href="#projects" onClick={handlelogout}>
                 Log out           </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;