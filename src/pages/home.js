import React,{useEffect, useState} from "react";
import Head from "next/head";
import Table from "./Table";
import Image from "next/image";
import axios from "axios";
import Link from 'next/link'
import { useAuth } from "utils/auth";
import { useRouter } from 'next/router';


function Home() {
 const [res,setres] = useState([])
 const [data, setData] = useState(null);
 const { logout,isAuthenticated } = useAuth();
 const router = useRouter();

 const handlelogout = () =>{
  logout();
 }
//  useEffect(() => {
//   if (!isAuthenticated) {
//     router.push('/');
//   }
// }, [isAuthenticated, router]);

useEffect(()=>{
  const token = localStorage.getItem('token');
console.log("tokrn",token);
  if (!token) {
    router.push('/');
  }
})
  return (
    <div>
      <Head>
        <title>IRDAC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <div>
      <nav className="bg-orange-400 flex justify-between flex-wrap">
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
        <div>
        
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex  p-3 ml-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-orange-200 dark:focus:ring-orange-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            data-target="navbar-default"
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default" >
          <ul className=" px-28 py-6 justify-end flex space-x-10 lg:float-row " >
            <li className="cursor-pointer text-sm hover:text-white">Home</li>
            <li className="cursor-pointer text-sm  hover:text-white" >
            <Link href="https://irdai.gov.in/">About us</Link>
            </li>
            <li className="cursor-pointer text-sm  hover:text-white">
              Contact us
            </li>
            <li className="cursor-pointer text-sm  hover:text-white">
              Support
            </li>
            <li className="cursor-pointer text-sm  hover:text-white" onClick={handlelogout}>
              LOG OUT
            </li>
          </ul>
        </div>
      </nav>
      </div>
    
      <div>
        <Table />
      </div>
    </div>
  );
}

export default Home;
