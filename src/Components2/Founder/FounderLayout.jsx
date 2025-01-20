import React,{useState} from 'react';
import { Home, Search, Users, Package, Heart, Settings, MoreHorizontal, House } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { Link, Outlet } from 'react-router-dom';

const FounderLayout = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
      setIsActive(!isActive);
      console.log(isActive);
      navigate('/founder/home'); // Replace '/home' with your desired route
    };

  return (
    // <div className="flex min-h-screen">
    //   <aside className="w-64 h-screen bg-gray-800 text-white fixed">
    //     <div className="p-4">
    //       <h1 className="text-2xl font-bold">My App</h1>
    //       <nav className="mt-4">
    //         <Link to="/founder/home" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
    //         <Link to="/founder/geet" className="block py-2 px-4 hover:bg-gray-700">Geet</Link>
    //         {/* <Link to="/founder/contact" className="block py-2 px-4 hover:bg-gray-700">Contact</Link> */}
    //       </nav>
    //     </div>
    //   </aside>
    //   <div className="flex-1 ml-64">
    //     <header className="bg-blue-600 text-white p-4 fixed w-full" style={{ marginLeft: '16rem' }}>
    //       <h1 className="text-xl">Header</h1>
    //     </header>
    //     <main className="mt-16 p-4">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>








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

      <div className="container flex gap-6 p-4 max-w-full">
        {/* Left Sidebar */}
        <aside className="w-64 space-y-4">
          <nav className="space-y-2">
            {[
              { icon: <House
                className={`h-5 w-5 cursor-pointer transition-colors duration-200 ${
                  isActive ? 'fill-white text-white' : 'fill-none text-gray-500'
                }`}
              />
                
                , label: "Home" },
              { icon: <Search className="h-5 w-5" />, label: "Explore" },
              { icon: <Users className="h-5 w-5" />, label: "Outreach" },
              { icon: <Package className="h-5 w-5" />, label: "Showcase" },
              { icon: <Heart className="h-5 w-5" />, label: "Activity" },
              { icon: <Settings className="h-5 w-5" />, label: "Get verified" },
              { icon: <MoreHorizontal className="h-5 w-5" />, label: "More" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={()=> {handleClick()}}
              >
                {item.icon}
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
