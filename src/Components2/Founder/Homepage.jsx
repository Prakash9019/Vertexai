import logo2 from "../../assets/logohome.png"
import {
  Home,  Search,  Users,  Heart,
  MoreHorizontal,  Image,LockKeyhole ,
  BadgeCheck,MessageSquare,Bookmark,Share2,
} from "lucide-react"
import React, { useState, useEffect ,useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import { ImageIcon, FileImageIcon as FileGif, List, Smile, X } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import axios from "axios";
import Post from "./Post";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const [postText, setPostText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);
   const navigate = useNavigate();
  const addEmoji = (emoji) => {
    setPostText((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const [activeNav, setActiveNav] = useState("home")
  const [activeTab, setActiveTab] = useState("all")
  const [activeFeed, setActiveFeed] = useState("trending")
  const token = localStorage.getItem("verificationToken");
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Search },
    { id: "outreach", label: "Outreach", icon: Users },
    { id: "activity", label: "Activity", icon: Heart },
    { id: "verified", label: "Get verified", icon: BadgeCheck },
    { id: "more", label: "More", icon: MoreHorizontal },
  ]

  const feedTabs = ["All", "Top on Vertx", "Favorite", "Following"]


  const tabsToRender = token ? feedTabs : feedTabs.slice(0, 2);
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






  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store file instead of Base64 string
      setPreviewImage(URL.createObjectURL(file));   
    }
  };
  

  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };

  const handlePost = async () => {
    const token = localStorage.getItem("verificationToken");
    if (!token) {
      throw new Error("Session TimeOut..");
    }
  
    if (!postText.trim() && !selectedImage && !selectedGif) {
      return; // Prevent empty posts
    }
  
    try {
      const formData = new FormData();
      formData.append("text", postText);
      formData.append("image", selectedImage);
      formData.append("token", token);
  
      const response = await fetch("https://vertxai-backend.vercel.app/api/posts/posts", {
        method: "POST",
        body: formData, // Sending as FormData instead of JSON
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to register");
      }
  
      if (response.status === 201) {
        setPosts([data, ...posts]);
        setPostText("");
        setSelectedImage(null);
        setSelectedGif(null);
        console.log(posts);
        navigate(0);
      }
      navigate(0);
      setShowModal(false);
      console.log("hellloooooooooo")
      navigate(0);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  
  








  // Fetch posts from backend
  useEffect(() => {
    // if(posts.length === 0){
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://vertxai-backend.vercel.app/api/posts/posts");
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
      fetchPosts();  
  
  }, []); 
  

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;



  return (
    <div className="min-h-screen bg-black text-white font-['Manrope']">

        {/* Main Content */}
        <main className="fixed left-[20%] w-[47.25%] top-16 pt-5 bottom-0 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar">
        {/* Post Creation */}
        

         { token &&  <div className="p-4 border-b-4 border-zinc-800">
      <div className="flex gap-4">
        <img src={logo2} className="w-12 h-12 rounded-full bg-zinc-800" />
        <div className="flex-1 ">
          <div
            onClick={() => setShowModal(true)}
            className="w-full p-3 outline-none rounded-full border border-2 border-zinc-800"
          >    Post something... </div>
            {showModal && (
      // <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      // <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-lg relative z-50 shadow-xl pointer-events-auto">
      <div className="fixed inset-0 left-[23%] top-24 bg-black bg-opacity-60 flex z-50 ">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-lg relative z-50 shadow-xl border-black border-4 inline-block right-7">
       
        <button onClick={() => setShowModal(false)} className="absolute top-3 ">
              <X className="h-6 w-6" />
            </button>
            <textarea
              placeholder="Post something..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full bg-transparent p-3 outline-none rounded-lg min-h-[100px] resize-none"
            />
            {previewImage && (
             <div className="relative inline-block mt-2">
             <img
               src={previewImage || "/placeholder.svg"}
               alt="Preview"
               
               className="max-h-60 rounded-lg object-cover"
             />
             <button
               onClick={() => setSelectedImage(null)}
               className="absolute top-2 right-2 p-1 bg-black/50 rounded-full"
             >
               <X className="w-4 h-4" />
             </button>
           </div>
            )}
            <div className="flex gap-4 mt-4">
              <div    onClick={openFilePicker} className="cursor-pointer">
                {/* <input {...getInputProps()} /> */}
                <input
            id="fileInput"
            type="file"
            accept="image/*"
            capture="user"
            className="hidden"
            onChange={handleFileChange}
          />
                <ImageIcon className="h-6 w-6" />
                
              </div>       

              <button onClick={() => setShowGifPicker(!showGifPicker)}>
                <FileGif className="h-6 w-6" />
              </button>
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <Smile className="h-6 w-6" />
              </button>
            </div>
            {showEmojiPicker && (
              <div className="absolute z-10 mt-2">
                <Picker data={data} onEmojiSelect={addEmoji} theme="dark" />
              </div>
            )}
         <button
  onClick={handlePost}  // ✅ Pass the function reference
  disabled={!postText && !selectedImage}
  className="w-full mt-4 p-2 bg-white text-black rounded-lg hover:bg-gray-300 disabled:opacity-50"
>
  Post
</button>

          </div>
        </div>
      )}
        </div>
      </div>
    </div>}

          {/* Feed Tabs */}
          <div className="flex  border-b-4 border-zinc-800">
            {tabsToRender.map((tab) => (
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
          
         
     
          {posts.length === 0 ? (
  <p>No posts available.</p>
) : (
  posts.map((post) => <Post key={post._id} userId={post._id} post={post} />)
)}

    

         
         
        </main>

        {/* Right Sidebar */}
        <aside className="w-[32.75%] fixed pt-5 right-0 top-16 bottom-0 border-l-1 border-zinc-800 bg-black z-40">
          <div className="p-4 h-full ">
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
              
              {token && recentNews.map((news) => (
                <div key={news.id} className="flex items-center gap-3 p-3 hover:bg-zinc-900 overflow-y-auto border-r-2 border-zinc-800 z-30 hide-scrollbar border cursor-pointer px-4">
                  <img src={news.image || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-lg" />
                  <p className="flex-1 font-medium">{news.title}</p>
                  <MoreHorizontal className="h-5 w-5" />
                </div>
              ))}
              {!token && <div className="flex flex-col gap-3 justify-center items-center h-full"> 
                 <LockKeyhole size={70} strokeWidth={2.5} />
                 <h1 className="text-2xl">Login to access</h1>
                 </div>}
            </div>
            
          </div>
        </aside>
      </div>
  )
}

