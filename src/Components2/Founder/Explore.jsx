import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logohome.png"
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
  BadgeCheck,MessageSquare,Bookmark,Share2,
  Smile,
  ChevronDown,
} from "lucide-react"

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("recommended")
  const [activeFeed, setActiveFeed] = useState("trending")


  const feedTabs = ["Recommended", "Top on Vertx", "Users", "News", "Articles","Categories"]
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

        {/* Main Content */}
        <main className="fixed left-[20%] w-[50%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
        {/* Post Creation */}



          <div className="p-4 border-b-4 border-zinc-800">
            <div className="flex gap-4">
              <div className="bg-zinc-900 rounded-full p-2 flex w-full items-center gap-2 border border-2 border-zinc-800">
              <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search for people, categories, and articles"
                  className="w-full bg-transparent p-3 outline-none rounded-full "
                />
              </div>

            </div>
          </div>

          {/* Feed Tabs   Search for people, categories, and articles */}
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
                <img src={logo2} className="w-12 h-12 rounded-full bg-zinc-800" />
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
            <div className="flex flex-row justify-between items-center p-2 ml-2  w-full"> 
              <div className="flex gap-2"> 
            <Heart /> <MessageSquare />  
             </div>  
             <div className="flex gap-2">   <Bookmark />     <Share2 /> </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[30%] fixed pt-5 right-0 top-16 bottom-0 border-l-1 border-zinc-800 bg-black z-40">
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
  )
}

