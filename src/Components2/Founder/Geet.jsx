import React, { useState, useEffect } from "react";
import { Sun, Moon, Send, Settings2 } from "lucide-react";
import logo from "../../assets/logo.png"
import logo1 from "../../assets/logo1.png"

function Geet() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <header className="border-b border-gray-600">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img  src={logo} className="h-9"/>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-gray-200"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className={`border border-gray-300 ${theme === "dark" ? "text-white  hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded hover:bg-gray-100`}>Upgrade</button>
            <button className={`border border-gray-300 ${theme === "dark" ? "text-white  hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded hover:bg-gray-100`}>Submit</button>
            <button className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700`}>Join</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-64 border-r hidden md:block">
          <div className="h-full flex flex-col">
            <div className="p-4">
              <div className="mb-8">
                <h2 className="text-sm font-semibold mb-2">Yesterday</h2>
                <button className={`w-full flex justify-between bg-gray-200 ${theme === "dark" ? "text-gray-800" : "text-gray-800"} px-4 py-2 rounded hover:bg-gray-300`}>
                  Generate pitch deck
                  <span className="opacity-50">...</span>
                </button>
              </div>
            </div>
            <div className="mt-auto p-4 space-y-2">
              <button className={`w-full flex justify-start px-4 py-2 rounded hover:bg-gray-100 ${theme === "dark" ? "text-white  hover:bg-gray-400" : "text-black"}`}>Home</button>
              <button className={`w-full flex justify-start flex-col items-start px-4 py-2 rounded hover:bg-gray-100 ${theme === "dark" ? "text-white  hover:bg-gray-400" : "text-black"}`}>
                <div className="flex items-center">
                  <span>⚡</span>
                  <span className="ml-2">Upgrade plan</span>
                </div>
                <span className="text-sm text-muted-foreground">Get access to all tools</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex justify-end mb-4">
              <button className={`p-2 hover:bg-gray-200 ${theme === "dark" ? "text-white  hover:bg-gray-400" : "text-black"}`}>
                <Settings2 className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"}`} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
              <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">What can I do for you?</h1>
              <div className="w-full max-w-3xl mb-8">
                <div className="relative ml-3">
                  <div className="absolute m-2  left-3 top-3">
                    {/* <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${theme === "dark" ? "text-white" : "text-black"}`} xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
                    </svg> */}
                     <img src={logo1} className={`w-9 h-9 p-1 fill-current ${theme === "dark" ? "text-white" : "text-black"}`} />
                  </div>
                  <input
                    className={`w-full pl-12 ml-5 pr-12 py-6 text-lg rounded-xl ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
                    placeholder="Ask Geet..."
                  />
                  <button className={`absolute right-3 top-5 p-2 ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-400" : "bg-gray-100"} rounded hover:bg-gray-200`}>
                    <Send className={`h-5 w-5 ${theme === "dark" ? "text-white " : "text-black"}`} />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className={`border border-gray-300 ${theme === "dark" ? "text-white hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded  hover:bg-gray-100 `}>Analyze docs</button>
                <button className={`border border-gray-300 ${theme === "dark" ? "text-white hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded hover:bg-gray-100`}>Create pitch deck</button>
                <button className={`border border-gray-300 ${theme === "dark" ? "text-white hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded hover:bg-gray-100`}>Deck analysis</button>
                <button className={`border border-gray-300 ${theme === "dark" ? "text-white hover:bg-gray-400" : "text-gray-700"} px-4 py-2 rounded hover:bg-gray-100`}>More</button>
              </div>
              <p className="text-muted-foreground text-sm mt-12 text-center">Vertx AI can make mistakes. Check accuracy and important information.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Geet;
