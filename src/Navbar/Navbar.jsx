import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const governingItems = [
  { label: "Office Bearers", path: "/office" },
  { label: "Governing Community", path: "/governing" },
];

const programItems = [
  { label: "Education Guidance", path: "/guidance" },
  { label: "Skill Development", path: "/skill" },
  { label: "Scholarship", path: "/scholarship" },
  { label: "Quresh Matrimony", path: "/quresh" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  const createMenuItems = (items) =>
    items.map((item, index) => ({
      key: index,
      label: <NavLink to={item.path} onClick={closeDrawer}>{item.label}</NavLink>,
    }));

  return (
    <div className="w-full max-md:w-full bg-blue-200">
        
      <div className="flex max-md:justify-between justify-center max-md:gap-5 gap-28 items-center py-6 px-4">
        {/* Desktop Navigation */}
        <div >
          <img src="logo.png" alt="" className='h-10' />
        </div>
        <ul className="max-md:hidden flex-wrap md:flex items-center gap-6 text-[15px]">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <Dropdown menu={{ items: createMenuItems(governingItems) }} trigger={['click']}>
            <NavLink onClick={(e) => e.preventDefault()}>
              <Space>
                Governing Body <DownOutlined />
              </Space>
            </NavLink>
          </Dropdown>
          <Dropdown menu={{ items: createMenuItems(programItems) }} trigger={['click']}>
            <NavLink onClick={(e) => e.preventDefault()}>
              <Space>
                Programs <DownOutlined />
              </Space>
            </NavLink>
          </Dropdown>
          <NavLink to="/gallery"><li>Gallery</li></NavLink>
          <NavLink to="/membership"><li>Membership</li></NavLink>
          <NavLink to="/reports"><li>Annual Reports</li></NavLink>
          <NavLink to="/contact"><li>Contact Us</li></NavLink>
        </ul>
        <NavLink to="/donate">
        <button className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-md">
          Donate Now
        </button>
        </NavLink>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={toggleMenu}>
          <MdOutlineMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDrawer}>
          <div
            className="w-3/4 h-full absolute right-0 bg-white shadow-lg p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Menu</h2>
              <AiOutlineClose size={30} className="cursor-pointer" onClick={closeDrawer} />
            </div>
            <ul className="flex flex-col gap-4 text-lg">
              <NavLink to="/" onClick={closeDrawer}><li>Home</li></NavLink>
              <NavLink to="/about" onClick={closeDrawer}><li>About</li></NavLink>
              <Dropdown menu={{ items: createMenuItems(governingItems) }} trigger={['click']}>
                <NavLink onClick={(e) => e.preventDefault()}>
                  <Space>
                    Governing Body <DownOutlined />
                  </Space>
                </NavLink>
              </Dropdown>
              <Dropdown menu={{ items: createMenuItems(programItems) }} trigger={['click']}>
                <NavLink onClick={(e) => e.preventDefault()}>
                  <Space>
                    Programs <DownOutlined />
                  </Space>
                </NavLink>
              </Dropdown>
              <NavLink to="/gallery" onClick={closeDrawer}><li>Gallery</li></NavLink>
              <NavLink to="/membership" onClick={closeDrawer}><li>Membership</li></NavLink>
              <NavLink to="/reports" onClick={closeDrawer}><li>Annual Reports</li></NavLink>
              <NavLink to="/contact" onClick={closeDrawer}><li>Contact Us</li></NavLink>
            </ul>
           <NavLink to="/donate">
           <button className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md">
              Donate Now
            </button>
           </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
