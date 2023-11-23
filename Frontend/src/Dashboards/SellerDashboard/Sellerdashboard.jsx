

import { FaBars } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart'


import { MdSpaceDashboard } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

import { FaAccusoft } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDomainVerification } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import {Link}  from 'react-router-dom';



const Sellerdashboard = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
      const data = {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
              {
                  label: 'Sales',
                  data: [540, 325, 702, 620],
                  backgroundColor: [
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 159, 64)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
              }
          ]
      };
      const options = {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      };

      setChartData(data);
      setChartOptions(options);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`pt-[30px] w-[243px] rounded lg:pt-0 bg-green-600 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${isSidebarOpen ? 'w-[300px]' : '-translate-x-full '
          } lg:translate-x-0`}
      >
        <h1 className='pt-8 text-2xl font-bold text-center '>Seller Dashboard</h1>

        <ol className='pt-5 text-lg cursor-pointer'>
          <Link to="/SellerDashboard">
            <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< MdSpaceDashboard className="inline text-white" />
              &nbsp; Dashboard
            </li>
          </Link>
          <Link to="/addplant">
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< GiPlantRoots className="inline text-white" />
            &nbsp; Add plant</li>
            </Link>
          <Link to="/Products" >
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< BsShopWindow className="inline text-white" />
            &nbsp; All Products</li></Link>
           
            <Link to="/myorders">
          <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>< FaAccusoft className="inline text-white" /> &nbsp;
            Orders</li></Link>
            <Link to="/paymenthistory">
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'> < MdOutlinePayments className="inline text-white" /> &nbsp;
            Payments history</li>
            </Link>
            <Link to="/yournurcery">
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< CgProfile className="inline text-white" /> &nbsp;
            Your nursery</li></Link>
        

          <Link to="/Profileverify" ><li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< MdOutlineDomainVerification className="inline text-white" /> &nbsp;
            Verify Profile</li> </Link>
            <Link to="/returns" >
          <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>< TbTruckReturn className="inline text-white" /> &nbsp;
            Returns</li></Link>

        </ol>
      </aside>


      {/*Routing*/}
      <div className={`md:p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] mt-10 lg:mt-0 lg:w-[cal(100vw-243px)] m-auto `}>
      
    <div className='w-full bg-slate-200  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
     <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-8 '>Welcome to Seller center</h2>
    </div>

     <div class="bg-white py-5 md:py-10 md:mt-3 ">
    
       <div class="sm-auto  max-w-7xl px-6 lg:px-8 ">
         <dl class="grid  gap-x-4 gap-y-4 text-center  grid-cols-1  md:grid-cols-4 lg:grid-cols-4 ">
         
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200  w-[235px] md:w-[245px] " >
             <dt class=" leading-7 text-gray-600 text-xl">44pkr</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total sales</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200 px-10 w-[235px]  md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">14</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total Orders</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200 px-10  w-[235px] md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">3</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total Returns</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3 rounded-2xl  bg-slate-200 px-10 w-[235px]  md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">13</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Notifications</dd>
           </div>
          
         
         </dl>
       </div>
     </div>

     <div className="card w-[90%] m-auto">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
       

      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-green-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
        <FaBars className="text-white" />

      </button>
    </div>
  );
};

export default Sellerdashboard;
