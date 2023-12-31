import React,{useEffect, useState} from "react";
import Head from "next/head";
import Table from "./Table";

import { useAuth } from "utils/auth";
import { useRouter } from 'next/router';
import NavBar from "components/navbar";
import Footer from "components/footer";
function Home() {
 const { logout,isAuthenticated } = useAuth();
 const router = useRouter();

 const handlelogout = () =>{
  logout();
 }

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
        <title>IRDAI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <div>
      <NavBar handlelogout={handlelogout} />
      </div>
      <div>
        <Table />
      </div>
      < Footer />
      <p class="text-center text-sm text-gray-500 my-10">
            &copy; 2023-2024 <a href="#" class="hover:underline" target="_blank">IRDAI</a>. All rights reserved.
         </p>
    </div>
  );
}

export default Home;
