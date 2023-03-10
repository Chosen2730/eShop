import React from "react";
import logo from "../../Assets/images/logo.png";
import { MdOutlineClose } from "react-icons/md";
import Btn from "../Button/btn";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar, navItems }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed w-full h-screen bg-white top-0 right-0 transition p-8 lg:hidden z-10`}
    >
      <i onClick={closeSidebar} className='text-2xl flex justify-end'>
        <MdOutlineClose className='' />
      </i>
      <img src={logo} className='w-40' alt='' />
      <div className='flex flex-col gap-6 my-10'>
        {navItems.map(({ url, title }, index) => {
          return (
            <Link
              key={index}
              className='block whitespace-nowrap text-lg font-medium capitalize border-b-2 py-4'
              to={url}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <div className='flex gap-4 items-center my-10'>
        <Link to='/login'>
          <Btn className='bg-white' text='Login' />
        </Link>
        <Link to='/signup'>
          <Btn className='bg-pry' text='Create Account' />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
