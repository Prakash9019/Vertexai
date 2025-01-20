import React,{useState} from 'react';
// import { Home, Search, Users, Package, Heart, Settings, MoreHorizontal, House } from 'lucide-react'
import { FaHome, FaSearch, FaUsers, FaBox, FaHeart, FaCog, FaEllipsisH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { Link, Outlet } from 'react-router-dom';

const FounderLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0); // To track the active button
  const navigate = useNavigate();

  const menuItems = [
    { icon: FaHome, label: "Home", route: "/home" },
    { icon: FaSearch, label: "Explore", route: "/explore" },
    { icon: FaUsers, label: "Outreach", route: "/outreach" },
    { icon: FaBox, label: "Showcase", route: "/showcase" },
    { icon: FaHeart, label: "Activity", route: "/activity" },
    { icon: FaCog, label: "Get verified", route: "/get-verified" },
    { icon: FaEllipsisH, label: "More", route: "/more" },
  ];

  const handleClick = (index, route) => {
    setActiveIndex(index); // Set the clicked button as active
    console.log(`/founder${route}`);
    navigate(`/founder${route}`); // Navigate to the specified route
  };

  return (
    
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Vertx Logo"
              width={32}
              height={32}
              className="object-contain aspect-square w-[100px]"
            />
            {/* <span className="text-xl font-bold">VERTX</span> */}
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-md border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors">
              Upgrade
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors">
              Submit
            </button>
            <button className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors">
              Join
            </button>
          </div>
        </div>
      </header>

      <div className="container flex gap-6 px-4 max-w-full ">
        {/* Left Sidebar */}
        <aside className="w-64 space-y-4 py-4 border-r border-gray-800 last:border-none">
        <nav className="space-y-2">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`flex w-full items-center gap-2 px-4 py-2 text-left rounded-lg transition-colors ${
            activeIndex === index
              ? 'text-white bg-gray-800' // Active button styles
              : 'text-gray-300 hover:bg-gray-800'
          }`}
          onClick={() => handleClick(index, item.route)}
        >
          <item.icon
            className={`h-5 w-5 transition-colors duration-200 ${
              activeIndex === index ? 'fill-white text-white' : ' text-gray-500'
            }`}
          />
          {item.label}
        </button>
      ))}
    </nav>
        </aside>
           

        {/* <main className="flex-1 space-y-6"> */}
        <Outlet />
            {/* </main> */}

        </div>
        
        </div>
  );
};

export default FounderLayout;
