import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import Sidebar from './Sidebar';

const Orders = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/order/sellerorders`);

        const data = await response.json();

        setproductData(data.rows);
        console.log(data)

      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (index, newStatus) => {

    const isConfirmed = window.confirm(`Are you sure you want to change the order state?`);

    if (!isConfirmed) {
      // If the user cancels the deletion, do nothing
      return;
    }

    const updatedProductData = [...productData];

    // Update the status of the selected product
    updatedProductData[index].status = newStatus;

    // Update the state with the modified array
    setproductData(updatedProductData);

    // Make an API call to update the status on the backend
    try {
      const response = await fetch(`http://localhost:5000/order/updateStatus/${updatedProductData[index].items_id}`, {
        method: 'PUT', // Use the appropriate HTTP method (PUT, PATCH, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        console.error('Failed to update status on the backend');
      }
    } catch (error) {
      console.error('Error updating status on the backend:', error);
    }
  };




  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`pt-[30px] w-[243px] rounded lg:pt-0 bg-red-600 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${isSidebarOpen ? 'w-[300px]' : '-translate-x-full '
          } lg:translate-x-0`}
      >
        <Sidebar />
      </aside>


      {/*Routing*/}
      <div className={`md:p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] mt-10 lg:mt-0 lg:w-[cal(100vw-243px)] m-auto `}>
        <div className='w-full bg-red-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
          <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Your Orders</h2>
        </div>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mt-8">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Order Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Order date
                </th>
                <th scope="col" class="px-6 py-3">
                  Customer address
                </th>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Change Status
                </th>
              </tr>
            </thead>
            <tbody>

              {productData.map((product, index) => (

                <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.order_id}
                  </th>
                  <td class="px-6 py-4">
                    {product.price}
                  </td>
                  <td class="px-6 py-4">
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',

                    }).format(new Date(product.order_date))}
                  </td>
                  <td class="px-6 py-4">
                    {product.delievery_address}
                  </td>
                  <td class="px-6 py-4">
                    {product.name}
                  </td>
                  <td class="px-6 py-4">
                    {
                      product.status == "Completed" ?
                      (
                        <div> {product.status}</div>
                      ):
                      (
                        <select
                      value={product.status}
                      className='inline p-2 bg-red-100 border-2 rounded-2xl'
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Collected">Collected from Seller</option>
                      <option value="delivered">Delivered To Customer</option>
                      <option value="Completed">Completed</option>
                      <option value="Return">Return</option>
                    </select>
                      )
                       
                    }
                    
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>



      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-red-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
        <FaBars className="text-white" />

      </button>
    </div>
  );
};

export default Orders;
