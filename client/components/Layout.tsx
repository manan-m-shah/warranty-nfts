import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className='flex flex-col h-screen w-full bg-color-base text-gray-600'>
        <Navbar />
        <main className="h-full">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout