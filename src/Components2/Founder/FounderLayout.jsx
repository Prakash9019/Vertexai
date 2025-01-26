import logo2 from "../../assets/logohome.png"
import logo1 from "../../assets/logo1.png"

import { useState } from "react"
import { MdOutlineVerified } from "react-icons/md";
import {
  Home,
  Search,
  Users,
  Heart,
  Shield,
  MoreHorizontal,
  Image,
  FileImageIcon as FileGif,
  List,
  BadgeCheck,
  Smile,
  ChevronDown,
} from "lucide-react"
// import { Home, Search, Users, Package, Heart, Settings, MoreHorizontal, House } from 'lucide-react'
import { FaHome, FaSearch, FaUsers, FaBox, FaHeart, FaCog, FaEllipsisH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { Link, Outlet } from 'react-router-dom';

const FounderLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0); // To track the active button
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home")
  const [activeTab, setActiveTab] = useState("all")
  const [activeFeed, setActiveFeed] = useState("trending")
  const navItems = [
    { id: "home", label: "Home", icon: Home,path:"/founder" },
    { id: "explore", label: "Explore", icon: Search ,path:"/founder/explore"},
    { id: "outreach", label: "Outreach", icon: Users ,path: '/founder/outreach'},
    { id: "activity", label: "Activity", icon: Heart },
    { id: "verified", label: "Get verified", icon: BadgeCheck },
    { id: "more", label: "More", icon: MoreHorizontal },
  ]

  const handleClick = (index, route) => {
    setActiveIndex(index); // Set the clicked button as active
    // console.log(`/founder${route}`);
    // console.log(`/founder${route}`);
    navigate(`/founder${route}`); // Navigate to the specified route
  };
  
   const handleClick3 =()=>{
       navigate('/pricingpage')
   }


  return (
    
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      {/* Top Navigation */}
     




 <header className="border-b-2 border-zinc-800 p-4 fixed top-0 left-0 right-0 bg-black z-50">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <img
            src={logo}
              alt="Vertx Logo"
            className="h-8"
          />
          <div className="flex gap-4">
            <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900" onClick={() => {handleClick3()}}>Upgrade</button>
            <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900">Submit</button>
            <button className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200" onClick={() => {handleClick3()}}>Edit</button>
          </div>
        </div>
      </header>







      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <nav className="w-[20%] fixed left-0 top-16 pt-5 bottom-0 border-r-2 border-zinc-800 flex flex-col justify-between bg-black z-40">
          <div>
            {navItems.map((item,index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {setActiveNav(item.id);  navigate(item.path)} }
                  className={`w-full flex items-center gap-3 p-3 rounded-full hover:bg-zinc-900 relative
                    ${activeNav === item.id ? "font-bold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-white before:rounded-full" : ""}`}
                >
                  <Icon className={`h-5 w-5 ${
                activeNav === item.id ? "text-white" : "text-gray-400"
              }`} />
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="p-4">
            <button className="w-full rounded-full bg-white text-black py-3 font-bold mb-4" onClick={() => {handleClick3()}}>Flow</button>
            <button className="w-full rounded-full border border-zinc-700 py-3 flex items-center justify-center gap-2" onClick={() => {handleClick3()}}>
            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33329 14.6667L5.99996 10H2.66663L8.66663 1.33334H9.99996L9.33329 6.66668H13.3333L6.66663 14.6667H5.33329Z" fill="white"/>
</svg>
</span>
              Upgrade plan
            </button>
          </div>
        </nav>


        {/* <main className="flex-1 space-y-6"> */}
        <Outlet />
            {/* </main> */}

        </div>
        
        </div>
  );
};

export default FounderLayout;
