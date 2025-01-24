// "use client"

// import { useState } from "react"
// import {
//   Home,
//   Search,
//   Users,
//   Heart,
//   Shield,
//   MoreHorizontal,
//   Image,
//   FileImageIcon as FileGif,
//   List,
//   Smile,
//   ChevronDown,
// } from "lucide-react"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logohome.png"

// export default function VertxInterface() {
//   const [activeNav, setActiveNav] = useState("home")
//   const [activeTab, setActiveTab] = useState("all")
//   const [activeFeed, setActiveFeed] = useState("trending")

//   const navItems = [
//     { id: "home", label: "Home", icon: Home },
//     { id: "explore", label: "Explore", icon: Search },
//     { id: "outreach", label: "Outreach", icon: Users },
//     { id: "activity", label: "Activity", icon: Heart },
//     { id: "verified", label: "Get verified", icon: Shield },
//     { id: "more", label: "More", icon: MoreHorizontal },
//   ]

//   const feedTabs = ["All", "Top on Vertx", "Favorite", "Following"]
//   const recentNews = [
//     {
//       id: 1,
//       title: "Nvidia's $1 Billion Investment in AI Start-ups",
//       image: "/placeholder.svg?height=48&width=48",
//     },
//     {
//       id: 2,
//       title: "KoBold Metals Secures $537 Million",
//       image: "/placeholder.svg?height=48&width=48",
//     },
//     {
//       id: 3,
//       title: "Rebel Foods Raises $210 Million",
//       image: "/placeholder.svg?height=48&width=48",
//     },
//     {
//       id: 4,
//       title: "M2P Fintech Secures $101 Million",
//       image: "/placeholder.svg?height=48&width=48",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white font-['Manrope']">
//       {/* Header */}
//       <header className="border-b-4 border-zinc-800 p-4 fixed top-0 left-0 right-0 bg-black z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <img
//             src={logo1}
//             alt="Vertx Logo"
//             className="h-8"
//           />
//           <div className="flex gap-4">
//             <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900">Upgrade</button>
//             <button className="rounded-full px-6 py-2 border border-zinc-700 hover:bg-zinc-900">Submit</button>
//             <button className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200">Edit</button>
//           </div>
//         </div>
//       </header>

//       <div className="pt-16 flex">
//         {/* Left Sidebar */}
//         <nav className="w-64 fixed left-0 top-16 bottom-0 border-r-4 border-zinc-800 flex flex-col justify-between bg-black z-40">
//           <div className="pt-5">
//             {navItems.map((item) => {
//               const Icon = item.icon
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveNav(item.id)}
//                   className={`w-full flex items-center gap-3 p-3 rounded-full hover:bg-zinc-900 relative
//                     ${activeNav === item.id ? "font-bold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-white before:rounded-full" : ""}`}
//                 >
//                   <Icon className="h-5 w-5" />
//                   {item.label}
//                 </button>
//               )
//             })}
//           </div>

//           <div className="p-4">
//             <button className="w-full rounded-full bg-white text-black py-3 font-bold mb-4">Flow</button>
//             <button className="w-full rounded-full border border-zinc-700 py-3 flex items-center justify-center gap-2">
//               <Shield className="h-5 w-5" />
//               Upgrade plan
//             </button>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="fixed left-64 pt-5 right-80 top-16 bottom-0 overflow-y-auto border-r-4 border-zinc-800 z-30">
//           {/* Post Creation */}
//           <div className="p-4 border-b-4 border-zinc-800">
//             <div className="flex gap-4">
              // <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
              // <div className="flex-1">
              //   <input type="text" placeholder="Post something..." className="w-full bg-transparent p-3 outline-none" />
              //   <div className="flex justify-between items-center mt-4">
              //     <div className="flex gap-4">
              //       <Image className="h-6 w-6" />
              //       <FileGif className="h-6 w-6" />
              //       <List className="h-6 w-6" />
              //       <Smile className="h-6 w-6" />
              //     </div>
//                   <button className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200">Post</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Feed Tabs */}
//           <div className="flex border-b-4 border-zinc-800">
//             {feedTabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab.toLowerCase())}
//                 className={`flex-1 py-4 relative hover:bg-zinc-900
//                   ${activeTab === tab.toLowerCase() ? "font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white" : ""}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Feed Content */}
//           <div className="p-4">
//             <div className="border-4 border-zinc-800 rounded-xl p-4">
//               <div className="flex justify-between items-start">
//                 <div className="flex gap-3">
//                   <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
//                   <div>
//                     <h3 className="font-bold">Vertx AI</h3>
//                     <p>
//                       Mark the date.
//                       <br />
//                       We're going live on REPUBLIC DAY.
//                     </p>
//                   </div>
//                 </div>
//                 <MoreHorizontal className="h-6 w-6" />
//               </div>
//               <div className="mt-4 aspect-video bg-zinc-900 rounded-xl flex items-center justify-center">
//                 <h2 className="text-3xl font-bold text-center">
//                   Original Release on
//                   <br />
//                   26 January, 2025
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-80 pt-5 fixed right-0 top-16 bottom-0 border-l-4 border-zinc-800 bg-black z-40">
//           <div className="p-4 h-full">
//             <div className="bg-zinc-900 rounded-full p-3 flex items-center gap-2">
//               <Search className="h-5 w-5 text-zinc-400" />
//               <input type="text" placeholder='Ask "Geet"' className="bg-transparent outline-none flex-1" />
//             </div>

//             <div className="mt-8 bg-black rounded-xl h-[calc(100vh-180px)] overflow-auto">
//               <h2 className="text-xl font-bold mb-4">Recent roundup</h2>
//               <div className="flex gap-4 mb-4">
//                 <button
//                   onClick={() => setActiveFeed("trending")}
//                   className={`flex-1 pb-2 relative hover:bg-zinc-900 rounded-full px-4 py-2
//                     ${activeFeed === "trending" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
//                 >
//                   Trending
//                 </button>
//                 <button
//                   onClick={() => setActiveFeed("funding")}
//                   className={`flex-1 pb-2 relative hover:bg-zinc-900 rounded-full px-4 py-2
//                     ${activeFeed === "funding" ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
//                 >
//                   Funding
//                 </button>
//               </div>
//               {recentNews.map((news) => (
//                 <div key={news.id} className="flex items-center gap-3 p-3 hover:bg-zinc-900 rounded-xl cursor-pointer">
//                   <img src={news.image || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-lg" />
//                   <p className="flex-1 font-medium">{news.title}</p>
//                   <MoreHorizontal className="h-5 w-5" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

"use client"

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

export default function VertxInterface() {
  const [activeNav, setActiveNav] = useState("home")
  const [activeTab, setActiveTab] = useState("all")
  const [activeFeed, setActiveFeed] = useState("trending")

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Search },
    { id: "outreach", label: "Outreach", icon: Users },
    { id: "activity", label: "Activity", icon: Heart },
    { id: "verified", label: "Get verified", icon: BadgeCheck },
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
    {
      id: 5,
      title: "M2P Fintech Secures $101 Million",
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 6,
      title: "M2P Fintech Secures $101 Million",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      {/* Header */}
      <header className="border-b-2 border-zinc-800 p-4 fixed top-0 left-0 right-0 bg-black z-50">
        <div className="max-w-full mx-auto flex justify-between items-center">
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

      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <nav className="w-[20%] fixed left-0 top-16 pt-5 bottom-0 border-r-2 border-zinc-800 flex flex-col justify-between bg-black z-40">
          <div>
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
          </div>

          <div className="p-4">
            <button className="w-full rounded-full bg-white text-black py-3 font-bold mb-4">Flow</button>
            <button className="w-full rounded-full border border-zinc-700 py-3 flex items-center justify-center gap-2">
            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33329 14.6667L5.99996 10H2.66663L8.66663 1.33334H9.99996L9.33329 6.66668H13.3333L6.66663 14.6667H5.33329Z" fill="white"/>
</svg>
</span>
              Upgrade plan
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="fixed left-[20%] w-[47.25%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
        {/* Post Creation */}



          <div className="p-4 border-b-4 border-zinc-800">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
              <div className="flex-1 ">
                <input
                  type="text"
                  placeholder="Post something..."
                  className="w-full bg-transparent p-3 outline-none rounded-full"
                />
                <div className="flex justify-between items-center mt-4 px-3 pb-3">
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
          <div className="flex border-b-4 border-zinc-800">
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
            <div className="border-2 border-zinc-800 rounded-xl p-4">
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
                <h2 className="text-3xl font-bold text-center">
                  Original Release on
                  <br />
                  26 January, 2025
                </h2>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[32.75%] fixed pt-5 right-0 top-16 bottom-0 border-l-1 border-zinc-800 bg-black z-40">
          <div className="p-4 h-full">
            <div className="bg-zinc-900 rounded-full p-3 flex items-center gap-2">
              <Search className="h-5 w-5 text-zinc-400" />
              <input type="text" placeholder='Ask "Geet"' className="bg-transparent outline-none flex-1" />
            </div>

            <div className="mt-8 bg-black rounded-xl h-[calc(100vh-180px)] overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 p-4">Recent roundup</h2>
              <div className="flex gap-4 mb-4 px-4">
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
                <div key={news.id} className="flex items-center gap-3 p-3 hover:bg-zinc-900 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar border cursor-pointer px-4">
                  <img src={news.image || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-lg" />
                  <p className="flex-1 font-medium">{news.title}</p>
                  <MoreHorizontal className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

