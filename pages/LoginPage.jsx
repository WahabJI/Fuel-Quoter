import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer'
import { useSession, signIn, signOut } from 'next-auth/react'
import localFont from "next/font/local"
import { useState, useEffect } from 'react'

const barlow = localFont({
  src: "../public/fonts/Barlow-Regular.ttf",
  weight: '200'
})

export default function login_page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function HandleGoogleSignIn() {
        signIn('google', { callbackUrl: 'http://localhost:3000' })
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const status = await signIn('credentials', {
        email: email,
        password: password,
        callbackUrl: '/'
      })
    }

    return (
      <div className={barlow.className}>
        <Head>
          <title>Fuel Quoter: Login</title>
          <link rel="icon" href="/login.ico" />
        </Head>
        <div className="flex flex-col min-h-screen h-screen justify-between bg-gray-100 overflow-auto">
        {/* TOP BAR */}
        <header>
          <nav className="relative flex w-full items-center font-bold text-4xl text-beige bg-light_blue shadow-md h-16">
            <div className="ml-8">
              <Link href="/"> FUEL QUOTER </Link>
            </div>
            <ul className="ml-auto left-0 right-0 top-full inline-flex">
              <li className="flex mr-8 items-center hover:underline">
                <Link href="/"> HOME </Link>
              </li>
              <li className="flex mr-8 items-center hover:underline">
                <Link href="/RegisterPage"> REGISTER </Link>
              </li>
            </ul>
          </nav>
        </header>


        {/* LOGIN FORM */}
        <div className="flex flex-grow justify-center items-center">
          <div className="px-8 py-6 text-left bg-white shadow-lg m-auto">
            <h3 className="text-2xl font-bold text-center">Login to your Account</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="mt-4">

                  <div>
                    <label className="block font-bold" htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" placeholder="Email Address" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </div>

                  <div className="mt-4">
                      <label className="block font-bold" htmlFor="password">Password</label>
                      <input id="password" name="password" type="password" placeholder="Password"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>

                  <div className="flex items-baseline justify-between">
                      <button type="submit" className="px-6 py-2 mt-4 text-beige bg-light_blue rounded-lg hover:bg-light_blue/75 hover:text-beige">Login</button>
                      <a href="#" className="text-sm text-black hover:underline">Forgot password?</a>
                  </div>
                        
                </div>
              </form>

              <div className="flex justify-center items-center mt-4">
                <hr className="border-gray-400 border-t-2 flex-grow" />
                <span className="mx-4 text-gray-500 font-medium">Or</span>
                <hr className="border-gray-400 border-t-2 flex-grow" />
              </div>   

              <div className="flex justify-center items-center mt-4">
                <button onClick={HandleGoogleSignIn} type="button" className="w-full px-4 py-2 mt-2 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm text-center justify-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  Sign in with Google
                </button>
              </div> 

            </div>
          </div>
          {/* FOOTER */}
          <Footer/>
        </div>
      </div>
    );
  }