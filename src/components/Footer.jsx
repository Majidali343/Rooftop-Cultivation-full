import React from 'react'
import LOGO from'../images/LOGO.png'

export default function footer() {
  return (
    <div>
  <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2" viewBox="0 0 24 24"' src={LOGO} alt="" />
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      <span class="ml-3 cursor-pointer text-xl">RoofTop Cultivation</span>
    </a>
      <p class="mt-2 text-sm text-gray-500">Small Change Big Change.</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">FAQs</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">How it works</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Contact us</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Contact</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Guidelines</a>
          </li>
          {/* <li>
            <a class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li> */}
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ACCOUNT</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Payment</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Delivery</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Terms</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Payment</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Delivery</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Terms</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Rooftop Cultivation —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1 cursor-text" target="_blank">@Final Year Project- @Supervision by Prof: Tajamul Shahzad</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-[#1877F2] cursor-pointer">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-[#1DA1F2] cursor-pointer">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-[#F56040] cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-[#2867B2;] cursor-pointer">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}
