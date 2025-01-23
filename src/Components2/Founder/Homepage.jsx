// import { AiOutlineSearch } from 'react-icons/ai'; import { FiMoreHorizontal } from 'react-icons/fi';
import logo1 from "../../assets/logo1.png"
// export default function HomePage() {
//   return (
//       <>
//         <main className="flex-1 space-y-6 border-r border-gray-300 last:border-none">
       
//           <section className="space-y-4 py-4">
//             <h1 className="text-4xl font-bold">Vertx AI Weekly Newsletter</h1>
//             <p className="text-gray-400">
//               Get the latest market trends, investment opportunities, and startup resources delivered directly to your inbox.
//             </p>
//             <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
//               Subscribe
//             </button>
//           </section>

//           <div className="border-b border-gray-800">
//             <nav className="flex gap-4" role="tablist">
//               {["All", "Top on Vertx", "Favorite", "Following"].map((tab, index) => (
//                 <button
//                   key={index}
//                   role="tab"
//                   aria-selected={index === 0}
//                   className={`px-4 py-2 text-sm font-medium transition-colors ${
//                     index === 0
//                       ? "text-white border-b-2 border-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <div className="rounded-lg bg-gray-900 p-6">
//             <div className="flex items-start justify-between">
//               <div className="flex items-center gap-3">
//                 {/* <div className="h-10 w-10 rounded-full bg-gray-800" /> */}
//                 <img
//                   src={logo1}
//                   alt="Vertx AI Logo"
//                  className="h-10 w-10 rounded-full bg-white p-1"
//                     />
//                 <div>
//                   <h3 className="font-semibold">Vertx AI</h3>
//                   <p className="text-sm text-gray-400">Mark the date.</p>
//                   <p className="text-sm text-gray-400">We're going live on REPUBLIC DAY.</p>
//                 </div>
//               </div>
//               <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
//                 <FiMoreHorizontal className="h-5 w-5" />
//               </button>
//             </div>
//             <div className="mt-4 rounded-lg bg-gray-800 p-6 text-center">
//               <h2 className="text-3xl font-bold">Original Release on</h2>
//               <p className="text-2xl">26 January, 2025</p>
//             </div>
//           </div>
//         </main>


//         <aside className="w-80 space-y-6 py-4">
//           <div className="relative">
//             <AiOutlineSearch size={24}  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder='Ask "Geet"'
//               className="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
//             />
//           </div>

//           <div className="rounded-lg bg-gray-900 p-4">
//             <h2 className="mb-4 text-xl font-bold">Recent roundup</h2>
//             <div className="flex gap-4 border-b border-gray-800 pb-2">
//               <button className="flex-1 py-2 text-white hover:bg-gray-800 rounded-md transition-colors">
//                 Trending
//               </button>
//               <button className="flex-1 py-2 text-gray-400 hover:bg-gray-800 rounded-md transition-colors">
//                 Funding
//               </button>
//             </div>
//             <div className="space-y-4 pt-4">
//               {[
//                 {
//                   title: "Nvidia's $1 Billion Investment in AI Start-ups",
//                   image: "/placeholder.svg?height=40&width=40",
//                 },
//                 {
//                   title: "KoBold Metals Secures $537 Million",
//                   image: "/placeholder.svg?height=40&width=40",
//                 },
//                 {
//                   title: "Rebel Foods Raises $210 Million",
//                   image: "/placeholder.svg?height=40&width=40",
//                 },
//                 {
//                   title: "M2P Fintech Secures $101 Million",
//                   image: "/placeholder.svg?height=40&width=40",
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <img src={item.image} alt="" width={40} height={40} className="rounded" />
//                   <p className="flex-1 text-sm">{item.title}</p>
//                   <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
//                     <FiMoreHorizontal className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>
    
//     </>
//   )
// }

"use client"

import { useState } from "react"
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
  Smile,
  ChevronDown,
} from "lucide-react"

export default function VertxInterface() {
  const [activeNav, setActiveNav] = useState("home")
  const [activeTab, setActiveTab] = useState("all")
  const [activeFeed, setActiveFeed] = useState("trending")

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Search },
    { id: "outreach", label: "Outreach", icon: Users },
    { id: "activity", label: "Activity", icon: Heart },
    { id: "verified", label: "Get verified", icon: Shield },
    { id: "more", label: "More", icon: MoreHorizontal },
  ]

  const feedTabs = ["All", "Top on Vertx", "Favorite", "Following"]
  const recentNews = [
    {
      id: 1,
      title: "Nvidia's $1 Billion Investment in AI Start-ups",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 2,
      title: "KoBold Metals Secures $537 Million",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 3,
      title: "Rebel Foods Raises $210 Million",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 4,
      title: "M2P Fintech Secures $101 Million",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      {/* Header */}
      <header className="border-b border-zinc-800 p-4 fixed top-0 w-full bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img
            src={logo1}
            alt="Vertx Logo"
            className="h-8"
          />
          <div className="flex gap-4">
            <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900">Upgrade</button>
            <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900">Submit</button>
            <button className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200">Edit</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto pt-16 flex">
        {/* Left Sidebar */}
        <nav className="w-64 fixed h-screen">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-full hover:bg-zinc-900 relative
                  ${activeNav === item.id ? "font-bold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-white before:rounded-full" : ""}`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            )
          })}

          <button className="w-full mt-8 rounded-full bg-white text-black py-3 font-bold">Flow</button>

          <button className="w-full mt-4 rounded-full border border-zinc-700 py-3 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5" />
            Upgrade plan
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-1 ml-64 mr-80 border-x border-zinc-800 min-h-screen">
          {/* Post Creation */}
          <div className="p-4 border-b border-zinc-800">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
              <div className="flex-1">
                <input type="text" placeholder="Post something..." className="w-full bg-transparent p-3 outline-none" />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-4">
                    <Image className="h-6 w-6" />
                    <FileGif className="h-6 w-6" />
                    <List className="h-6 w-6" />
                    <Smile className="h-6 w-6" />
                  </div>
                  <button className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200">Post</button>
                </div>
              </div>
            </div>
          </div>

          {/* Feed Tabs */}
          <div className="flex border-b border-zinc-800">
            {feedTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`flex-1 py-4 relative hover:bg-zinc-900
                  ${activeTab === tab.toLowerCase() ? "font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Feed Content */}
          <div className="p-4">
            <div className="border border-zinc-800 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
                  <div>
                    <h3 className="font-bold">Vertx AI</h3>
                    <p>
                      Mark the date.
                      <br />
                      We're going live on REPUBLIC DAY.
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <div className="mt-4 aspect-video bg-zinc-900 rounded-xl flex items-center justify-center">
                <h2 className="text-3xl font-bold">
                  Original Release on
                  <br />
                  26 January, 2025
                </h2>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 fixed right-0 h-screen">
          <div className="bg-zinc-900 rounded-full p-3 flex items-center gap-2">
            <Search className="h-5 w-5 text-zinc-400" />
            <input type="text" placeholder='Ask "Geet"' className="bg-transparent outline-none flex-1" />
          </div>

          <div className="mt-8 bg-black rounded-xl p-4 h-[calc(100vh-120px)] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Recent roundup</h2>
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setActiveFeed("trending")}
                className={`flex-1 pb-2 relative hover:bg-zinc-900 rounded-full px-4 py-2
                  ${activeFeed === "trending" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
              >
                Trending
              </button>
              <button
                onClick={() => setActiveFeed("funding")}
                className={`flex-1 pb-2 relative hover:bg-zinc-900 rounded-full px-4 py-2
                  ${activeFeed === "funding" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
              >
                Funding
              </button>
            </div>
            {recentNews.map((news) => (
              <div key={news.id} className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded-xl cursor-pointer">
                <img src={news.image || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-lg" />
                <p className="flex-1 font-medium">{news.title}</p>
                <MoreHorizontal className="h-5 w-5" />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

