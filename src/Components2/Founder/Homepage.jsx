import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Home, Search, Users, Heart, MoreHorizontal, ImageIcon, FileImageIcon as FileGif, Smile, X, LockKeyhole, BadgeCheck } from "lucide-react";
import axios from "axios";
import Post from "./Post";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

// Import images with Lazy Loading
const logo2 = React.lazy(() => import("../../assets/logohome.png"));

export default function HomePage() {
  const [postText, setPostText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("verificationToken");

  // Fetch posts using useEffect with dependencies
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://vertxai-backend.vercel.app/api/posts/posts");
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Optimized function with useCallback
  const addEmoji = useCallback((emoji) => {
    setPostText((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  }, []);

  // Memoize filtered posts for better performance
  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">
      <main className="fixed left-[20%] w-[47.25%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
        
        {/* Post Creation */}
        {token && (
          <div className="p-4 border-b-4 border-zinc-800">
            <div className="flex gap-4">
              <React.Suspense fallback={<div>Loading...</div>}>
                <img src={logo2} className="w-12 h-12 rounded-full bg-zinc-800" alt="Logo" loading="lazy" />
              </React.Suspense>
              <div className="flex-1">
                <div onClick={() => setShowModal(true)} className="w-full p-3 outline-none rounded-full border border-2 border-zinc-800">
                  Post something...
                </div>

                {/* Modal for Creating Post */}
                {showModal && (
                  <div className="fixed inset-0 left-[23%] top-24 bg-black bg-opacity-60 flex z-50">
                    <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-lg relative z-50 shadow-xl border-black border-4 inline-block right-7">
                      <button onClick={() => setShowModal(false)} className="absolute top-3">
                        <X className="h-6 w-6" />
                      </button>
                      <textarea
                        placeholder="Post something..."
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        className="w-full bg-transparent p-3 outline-none rounded-lg min-h-[100px] resize-none"
                      />
                      {selectedImage && (
                        <div className="relative inline-block mt-2">
                          <img src={selectedImage} alt="Preview" className="max-h-60 rounded-lg object-cover" loading="lazy" />
                          <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 p-1 bg-black/50 rounded-full">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <div className="flex gap-4 mt-4">
                        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                          <Smile className="h-6 w-6" />
                        </button>
                      </div>
                      {showEmojiPicker && <Picker data={data} onEmojiSelect={addEmoji} theme="dark" />}
                      <button onClick={() => setShowModal(false)} className="w-full mt-4 p-2 bg-white text-black rounded-lg hover:bg-gray-300">
                        Post
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Feed Content */}
        {loading ? (
          <p>Loading posts...</p> // Replace with Skeleton Loader for better UX
        ) : error ? (
          <p>{error}</p>
        ) : memoizedPosts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          memoizedPosts.map((post) => <Post key={post._id} userId={post._id} post={post} />)
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="w-[32.75%] fixed pt-5 right-0 top-16 bottom-0 border-l-1 border-zinc-800 bg-black z-40">
        <div className="p-4 h-full">
          <div className="bg-zinc-900 rounded-full p-3 flex items-center gap-2">
            <Search className="h-5 w-5 text-zinc-400" />
            <input type="text" placeholder='Ask "Geet"' className="bg-transparent outline-none flex-1" />
          </div>

          <div className="mt-8 bg-black rounded-xl h-[calc(100vh-180px)] overflow-y-auto border border-zinc-800">
            <h2 className="text-xl font-bold mb-4 p-4">Recent roundup</h2>

            {token ? (
              <div className="p-4">
                <p>Trending news goes here...</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 justify-center items-center h-full">
                <LockKeyhole size={70} strokeWidth={2.5} />
                <h1 className="text-2xl">Login to access</h1>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
