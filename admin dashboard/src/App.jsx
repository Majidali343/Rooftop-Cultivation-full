
import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { PrimeReactProvider } from 'primereact/api';
import Login from "./AdminDashboard/Login";
import Allusers from "./AdminDashboard/Allusers";
import Admindashboard from "./AdminDashboard/Admindashboard";



function App() {
  return (
    <>
     <ToastContainer />
      <PrimeReactProvider>

        <Routes>
        <Route path="/AdminLogin" element={<Login/>}></Route>
        <Route path="/Allusers" element={<Allusers/>}></Route>
        <Route path="/Admindashboard" element={<Admindashboard/>}></Route>
        </Routes>

      </PrimeReactProvider>
    </>

  );
}

export default App;
