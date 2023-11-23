import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
<section class="text-gray-600 focus:border-[#00967C] dark:focus:ring-[#00967C] body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-96 md:w-96 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Welcome Back!</h1>
      <p class="leading-relaxed mt-4">We source the healthiest and most beautiful plants to bring nature's finest to your home. We provide expert care advice to ensure your plants thrive.</p>
    </div>
    <div class="lg:w-1/2 md:w-3/6 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium text-center title-font mb-5">Sign Up</h2>
      <div class=" grid grid-cols-2 gap-2 relative mb-4">
        {/* <label for="email" class="leading-7 text-sm text-gray-600">First Name</label> */}
        <input id="text" name="text" placeholder='First Name' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="text" />
        <input id="text" name="text" placeholder='Last Name' class=" w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="text" />
      </div>
      <div class=" grid grid-cols-2 gap-2 relative mb-4">
        {/* <label for="email" class="leading-7 text-sm text-gray-600">First Name</label> */}
        <input id="email" name="email" placeholder='xyz@email.com' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="email" />
        <input id="tel" name="phone" placeholder='+92-3000000000' class=" w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="phone" />
      </div>
      <div class=" grid grid-cols-2 gap-2 relative mb-4">
        {/* <label for="email" class="leading-7 text-sm text-gray-600">First Name</label> */}
        <input id="password" name="password" placeholder='Enter Password' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="password"/>
        <input id="password" name="password" placeholder='Enter Password' class="w-full bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors text-sm duration-200 ease-in-out" type="password"/>
      </div>
      <select id="countries" class=" cursor-pointer text-sm block w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[#00967C] focus:ring-2 focus:ring-green-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors  duration-200 ease-in-out">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
  <option value="PK">Pakistan</option>
  <option value="IN">India</option>
</select>
      <br />
      <button class="text-white bg-[#00967C] border-0 py-2 px-8 focus:outline-none hover:bg-[#1B4636] rounded text-m">Sign Up</button>
      <br />
      <button class="text-xs hover:underline text-gray-500 mt-3">Sign In</button>
    </div>
  </div>
</section>
    </div>
  )
}
