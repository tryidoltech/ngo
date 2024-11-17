import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const items = [
  { label: <a href="/office">Office Bearers</a>, key: '0' },
  { label: <a href="/governing">Governing Community</a>, key: '1' },
  { type: 'divider' },
];

const programs = [
  { label: <a href="/guidance">Education Guidance</a>, key: '0' },
  { label: <a href="/skill">Skill Development</a>, key: '1' },
  { label: <a href="/scholarship">Scholarship</a>, key: '2' },
  { label: <a href="/quresh">Quresh Matrimony</a>, key: '3' },
  { type: 'divider' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="w-full max-md:w-full bg-blue-200">
      <div className="flex max-md:justify-end   justify-center gap-10 items-center py-6 px-4">
        {/* Desktop Navigation */}
        <ul className="max-md:hidden flex-wrap md:flex  items-center gap-6 text-[15px]">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Governing Body <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown menu={{ items: programs }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Programs <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <NavLink to="/gallery"><li>Gallery</li></NavLink>
          <NavLink to="/membership"><li>Membership</li></NavLink>
          <NavLink to="/reports"><li>Annual Reports</li></NavLink>
          <NavLink to="/contact"><li>Contact Us</li></NavLink>
        </ul>
        <button className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-md">
          Donate Now
        </button>

        {/* Mobile Navigation */}
        <div className=''>
        <button className="md:hidden" onClick={toggleMenu}>
          <MdOutlineMenu size={24} />
        </button>
        </div>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDrawer}>
          <div
            className="w-3/4 h-full bg-white shadow-lg p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Menu</h2>
              <AiOutlineClose size={30} className="cursor-pointer" onClick={closeDrawer} />
            </div>
            <ul className="flex flex-col gap-4 text-lg">
              <NavLink to="/" onClick={closeDrawer}><li>Home</li></NavLink>
              <NavLink to="/about" onClick={closeDrawer}><li>About</li></NavLink>
              <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Governing Body <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: programs }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Programs <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <NavLink to="/gallery" onClick={closeDrawer}><li>Gallery</li></NavLink>
              <NavLink to="/membership" onClick={closeDrawer}><li>Membership</li></NavLink>
              <NavLink to="/reports" onClick={closeDrawer}><li>Annual Reports</li></NavLink>
              <NavLink to="/contact" onClick={closeDrawer}><li>Contact Us</li></NavLink>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
