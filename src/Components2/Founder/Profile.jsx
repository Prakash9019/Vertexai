
import { Home, Search, Users, Heart, Shield, MoreHorizontal, Calendar, Zap } from "lucide-react"


export default function FounderProfile() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <main className="ml-64 pt-20 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-b from-gray-800 to-black rounded-xl"></div>
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-black"></div>
            </div>
            <div className="absolute top-4 right-4">
              <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition">
                Update Profile
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">Username</h1>
                <p className="text-gray-400">@username1234567890</p>
              </div>
              <button className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition flex items-center gap-2">
                <Shield className="w-4 h-4" />
                GET VERIFIED
              </button>
            </div>

            <div className="flex items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined Month YYYY</span>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  <strong className="text-white">0</strong> Following
                </span>
                <span>
                  <strong className="text-white">0</strong> Followers
                </span>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="border-b border-white/10">
              <div className="flex gap-8">
                <button className="px-4 py-4 text-sm font-medium border-b-2 border-white">Posts</button>
                <button className="px-4 py-4 text-sm font-medium text-gray-400 hover:text-white transition">
                  Articles
                </button>
                <button className="px-4 py-4 text-sm font-medium text-gray-400 hover:text-white transition">
                  Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

