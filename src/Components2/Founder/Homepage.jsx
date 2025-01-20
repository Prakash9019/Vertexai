import { Home, Search, Users, Package, Heart, Settings, MoreHorizontal } from 'lucide-react'
import logo from "../../assets/logo.png"
export default function VertxInterface() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="border-b border-gray-800 p-4">
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

      <div className="container mx-auto flex gap-6 p-4">
        {/* Left Sidebar */}
        <aside className="w-64 space-y-4">
          <nav className="space-y-2">
            {[
              { icon: <Home className="h-5 w-5" />, label: "Home" },
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
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">Vertx AI Weekly Newsletter</h1>
            <p className="text-gray-400">
              Get the latest market trends, investment opportunities, and startup resources delivered directly to your inbox.
            </p>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </section>

          <div className="border-b border-gray-800">
            <nav className="flex gap-4" role="tablist">
              {["All", "Top on Vertx", "Favorite", "Following"].map((tab, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === 0}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "text-white border-b-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="rounded-lg bg-gray-900 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-800" />
                <div>
                  <h3 className="font-semibold">Vertx AI</h3>
                  <p className="text-sm text-gray-400">Mark the date.</p>
                  <p className="text-sm text-gray-400">We're going live on REPUBLIC DAY.</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 rounded-lg bg-gray-800 p-6 text-center">
              <h2 className="text-3xl font-bold">Original Release on</h2>
              <p className="text-2xl">26 January, 2025</p>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder='Ask "Geet"'
              className="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div className="rounded-lg bg-gray-900 p-4">
            <h2 className="mb-4 text-xl font-bold">Recent roundup</h2>
            <div className="flex gap-4 border-b border-gray-800 pb-2">
              <button className="flex-1 py-2 text-white hover:bg-gray-800 rounded-md transition-colors">
                Trending
              </button>
              <button className="flex-1 py-2 text-gray-400 hover:bg-gray-800 rounded-md transition-colors">
                Funding
              </button>
            </div>
            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Nvidia's $1 Billion Investment in AI Start-ups",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "KoBold Metals Secures $537 Million",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "Rebel Foods Raises $210 Million",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "M2P Fintech Secures $101 Million",
                  image: "/placeholder.svg?height=40&width=40",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={item.image} alt="" width={40} height={40} className="rounded" />
                  <p className="flex-1 text-sm">{item.title}</p>
                  <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

