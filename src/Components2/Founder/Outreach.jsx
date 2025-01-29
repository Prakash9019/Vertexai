

import { useState } from "react"
import { Home, Search, Users, Heart, Shield,LockKeyhole, MoreHorizontal, ChevronDown } from "lucide-react"

export default function OutreachPage() {
  const [activeNav, setActiveNav] = useState("outreach")
  const [activeFilters, setActiveFilters] = useState({
    type: false,
    stage: false,
    sector: false,
    size: false,
    geography: false,
  })
  const token = localStorage.getItem("verificationToken");
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Search },
    { id: "outreach", label: "Outreach", icon: Users },
    { id: "activity", label: "Activity", icon: Heart },
    { id: "verified", label: "Get verified", icon: Shield },
    { id: "more", label: "More", icon: MoreHorizontal },
  ]

  const vcFirms = [
    {
      id: 1,
      name: "First Momentum Ventures",
      type: "VC firm",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-white",
    },
    {
      id: 2,
      name: "YAP Capital",
      type: "Family office",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      id: 3,
      name: "Katha VC",
      type: "Angel Network",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#98E5E0]",
    },
    {
      id: 10,
      name: "First Momentum Ventures",
      type: "VC firm",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-white",
    },
    {
      id: 20,
      name: "YAP Capital",
      type: "Family office",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      id: 30,
      name: "Katha VC",
      type: "Angel Network",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#98E5E0]",
    },
    {
      id: 12,
      name: "First Momentum Ventures",
      type: "VC firm",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-white",
    },
    {
      id: 21,
      name: "YAP Capital",
      type: "Family office",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      id: 32,
      name: "Katha VC",
      type: "Angel Network",
      logo: "/placeholder.svg?height=200&width=400",
      bgColor: "bg-[#98E5E0]",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      {/* Header */}
      

        {/* Main Content */}
        <main className="fixed left-[20%] w-[80%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
       
          <div className="p-8 relative">
            {/* Search Bar */}
            <div className="absolute top-8 right-8 w-80">
              <div className="bg-zinc-900 rounded-full p-3 flex items-center gap-2">
                <Search className="h-5 w-5 text-zinc-400" />
                <input type="text" placeholder='Ask "Geet"' className="bg-transparent outline-none flex-1 text-white" />
              </div>
            </div>

            {/* Ad Block */}
            <div className="absolute top-24 right-8 w-80">
              <div className="rounded-xl overflow-hidden">
                <div className="bg-[#F06449] p-6 relative">
                  <div className="absolute top-4 right-4 text-sm">Ad</div>
                  <h3 className="text-sm mb-2">Google for Startups</h3>
                  <h2 className="text-3xl font-bold mb-4">
                    Black
                    <br />
                    Founders
                    <br />
                    Fund
                  </h2>
                  <p className="text-sm">Google for startups</p>
                </div>
                <div className="bg-black border-4 border-t-0 border-zinc-800 p-3 flex justify-between items-center">
                  <div className="font-medium">Black Founders Fund</div>
                  <div className="flex gap-2">
                    <button className="px-4 py-1 rounded-full border border-zinc-700 text-sm hover:bg-zinc-900">
                      Visit site
                    </button>
                    <button className="px-2 py-1 rounded-full border border-zinc-700 text-sm hover:bg-zinc-900">
                      Ad
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-2">Vertx AI Weekly Newsletter</h1>
            <p className="text-zinc-400 text-lg mb-6 w-1/2">
              Get the latest market trends, investment opportunities, and startup resources delivered directly to your
              inbox.
            </p>
            <button className="rounded-full px-8 py-3 bg-white text-black hover:bg-zinc-200 font-medium">
              Subscribe
            </button>

            {/* Filters */}
            {/* {!token && <div className="flex flex-col gap-3 justify-center items-center h-full"> 
                 <LockKeyhole size={70} strokeWidth={2.5} />
                 <h1 className="text-2xl">Login to access</h1>
                 </div>} */}

            <div className="flex gap-4 mt-60 mb-8">
              {Object.entries(activeFilters).map(([key]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilters((prev) => ({ ...prev, [key]: !prev[key] }))}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 hover:bg-zinc-900"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ))}
            </div>

            {/* VC Grid */}
           
    <div className="flex flex-col h-full">
      {!token && (
        <div className="flex flex-col gap-3 justify-center items-center h-full bg-opacity-90">
          <LockKeyhole size={70} strokeWidth={2.5} />
          <h1 className="text-2xl">Login to access</h1>
        </div>
      )}
      
      {token && (
        <div className="grid grid-cols-3 gap-4">
          {vcFirms.map((firm) => (
            <div key={firm.id} className="bg-black border-4 border-zinc-800 rounded-xl p-6">
              {/*  <div className={`aspect-video ${firm.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <img src={firm.logo || "/placeholder.svg"} alt={firm.name} className="h-12" />

              </div>  */}
              <div className={`aspect-video bg-white rounded-lg flex items-center justify-center mb-4`}>
                {/* <img src={firm.logo || "/placeholder.svg"} alt={firm.name} className="h-12" /> */}
                  <h1 className="text-black font-black"> {firm.name} </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-bold">{firm.name}</h3>
                  <p className="text-sm text-zinc-400">{firm.type}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-full border border-zinc-700 text-sm hover:bg-zinc-900">
                    Mark
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-full border border-zinc-700 text-sm hover:bg-zinc-900">
                    View profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  
          </div>
        </main>
      </div>
   
  )
}
