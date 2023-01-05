import React, { useState } from "react";
import logo from "../../Assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Btn from "../Button/btn";
import Sidebar from "./sidebar";

const Nav = () => {
  const navItems = [
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "API Documentation", url: "/documentation" },
    { title: "Dolar card", url: "dolar-card" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className='bg-sec border-b-2 border-b-white shadow-xl'>
      <div className='max-width1 flex items-center justify-between'>
        <div className='flex justify-between w-full lg:w-fit items-center'>
          <img className='w-14' src={logo} alt='logo' />
          <i className='text-pry text-xl lg:hidden' onClick={openSidebar}>
            <RxHamburgerMenu />
          </i>
        </div>
        <div className='lg:flex gap-4 items-center hidden'>
          {navItems.map(({ url, title }, index) => {
            return (
              <Link
                key={index}
                className='text-white block whitespace-nowrap text-sm font-medium capitalize'
                to={url}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <div className='lg:flex gap-4 items-center hidden'>
          <Btn className='bg-white' text='Login' />
          <Btn className='bg-pry' text='Create Account' />
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        navItems={navItems}
      />
    </div>
  );
};

export default Nav;
