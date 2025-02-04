import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logohome.png"
import {
  Home,  Search,  Users,  Heart,
  MoreHorizontal,  Image,LockKeyhole ,
  BadgeCheck,MessageSquare,Bookmark,Share2,
} from "lucide-react"
import React, { useState, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import { ImageIcon, FileImageIcon as FileGif, List, Smile, X } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";




export default function HomePage() {
  const [postText, setPostText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [gifs, setGifs] = useState(null);
  const [searchGif, setSearchGif] = useState("");
  const [isGifError, setIsGifError] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".gif"] },
    multiple: false,
  });

  const addEmoji = (emoji) => {
    setPostText((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const searchGifs = async (query) => {
    setIsGifError(false);
    try {
      const mockGifs = [
        { id: "1", images: { fixed_height: { url: "https://media.giphy.com/media/3o7TKsQ8UZx6b0HHbi/giphy.gif" } } },
        { id: "2", images: { fixed_height: { url: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif" } } },
      ];
      setGifs(mockGifs);
    } catch (error) {
      setIsGifError(true);
    }
  };

  const handlePost = async () => {
    setShowModal(false);
    setPostText("");
    setSelectedImage(null);
    setSelectedGif(null);
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
            {selectedImage && (
             <div className="relative inline-block mt-2">
             <img
               src={selectedImage || "/placeholder.svg"}
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
              <div {...getRootProps()} className="cursor-pointer">
                <input {...getInputProps()} />
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
              onClick={handlePost}
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



// "use client"

// import { useState, useCallback } from "react"
// import { useDropzone } from "react-dropzone"
// import { ImageIcon, FileImageIcon as FileGif, List, Smile, X } from "lucide-react"
// import data from "@emoji-mart/data"
// import Picker from "@emoji-mart/react"

// // Remove the GiphyFetch initialization

// export default function PostCreator() {
//   const [postText, setPostText] = useState("")
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false)
//   const [showGifPicker, setShowGifPicker] = useState(false)
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)
//   const [selectedGif, setSelectedGif] = useState<string | null>(null)
//   const [gifs, setGifs] = useState<any[]>([])
//   const [searchGif, setSearchGif] = useState("")
//   const [isGifError, setIsGifError] = useState(false)

//   // Handle file drop
//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     const file = acceptedFiles[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         setSelectedImage(e.target?.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }, [])

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".png", ".jpg", ".jpeg", ".gif"],
//     },
//     multiple: false,
//   })

//   // Handle emoji selection
//   const addEmoji = (emoji: any) => {
//     setPostText((prev) => prev + emoji.native)
//     setShowEmojiPicker(false)
//   }

//   // Handle GIF search
//   const searchGifs = async (query: string) => {
//     setIsGifError(false)
//     try {
//       // Replace this with your actual GIF search implementation
//       // For now, we'll use a placeholder implementation
//       const mockGifs = [
//         { id: "1", images: { fixed_height: { url: "https://media.giphy.com/media/3o7TKsQ8UZx6b0HHbi/giphy.gif" } } },
//         { id: "2", images: { fixed_height: { url: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif" } } },
//       ]
//       setGifs(mockGifs)
//     } catch (error) {
//       console.error("Error searching GIFs:", error)
//       setIsGifError(true)
//     }
//   }

//   // Handle post submission
//   const handlePost = async () => {
//     const postData = {
//       text: postText,
//       image: selectedImage,
//       gif: selectedGif,
//     }

//     try {
//       // Replace with your API endpoint
//       const response = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(postData),
//       })

//       if (response.ok) {
//         setPostText("")
//         setSelectedImage(null)
//         setSelectedGif(null)
//       }
//     } catch (error) {
//       console.error("Error creating post:", error)
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto bg-black text-white">
//       <div className="p-4 border-b border-zinc-800">
//         <div className="flex gap-4">
//           <div className="w-12 h-12 rounded-full bg-zinc-800" />
//           <div className="flex-1">
//             <textarea
//               placeholder="Post something..."
//               value={postText}
//               onChange={(e) => setPostText(e.target.value)}
//               className="w-full bg-transparent p-3 outline-none rounded-lg border border-zinc-800 min-h-[100px] resize-none"
//             />

//             {/* Preview Area */}
//             {selectedImage && (
//               <div className="relative mt-2">
//                 <img
//                   src={selectedImage || "/placeholder.svg"}
//                   alt="Preview"
//                   className="max-h-60 rounded-lg object-cover"
//                 />
//                 <button
//                   onClick={() => setSelectedImage(null)}
//                   className="absolute top-2 right-2 p-1 bg-black/50 rounded-full"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             )}

//             {selectedGif && (
//               <div className="relative mt-2">
//                 <img src={selectedGif || "/placeholder.svg"} alt="GIF" className="max-h-60 rounded-lg object-cover" />
//                 <button
//                   onClick={() => setSelectedGif(null)}
//                   className="absolute top-2 right-2 p-1 bg-black/50 rounded-full"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             )}

//             <div className="flex justify-between items-center mt-4">
//               <div className="flex gap-4">
//                 <div {...getRootProps()} className="cursor-pointer">
//                   <input {...getInputProps()} />
//                   <ImageIcon className="h-6 w-6" />
//                 </div>
//                 <button onClick={() => setShowGifPicker(!showGifPicker)}>
//                   <FileGif className="h-6 w-6" />
//                 </button>
//                 <List className="h-6 w-6" />
//                 <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
//                   <Smile className="h-6 w-6" />
//                 </button>
//               </div>
//               <button
//                 onClick={handlePost}
//                 disabled={!postText && !selectedImage && !selectedGif}
//                 className="rounded-full px-6 py-2 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Post
//               </button>
//             </div>

//             {/* Emoji Picker */}
//             {showEmojiPicker && (
//               <div className="absolute z-10 mt-2">
//                 <Picker data={data} onEmojiSelect={addEmoji} theme="dark" />
//               </div>
//             )}

//             {/* GIF Picker */}
//             {showGifPicker && (
//               <div className="absolute z-10 mt-2 bg-zinc-900 p-4 rounded-lg">
//                 <input
//                   type="text"
//                   placeholder="Search GIFs..."
//                   value={searchGif}
//                   onChange={(e) => {
//                     setSearchGif(e.target.value)
//                     searchGifs(e.target.value)
//                   }}
//                   className="w-full bg-zinc-800 p-2 rounded-lg mb-4"
//                 />
//                 {isGifError ? (
//                   <p className="text-red-500">Error loading GIFs. Please try again later.</p>
//                 ) : (
//                   <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
//                     {gifs.map((gif) => (
//                       <img
//                         key={gif.id}
//                         src={gif.images.fixed_height.url || "/placeholder.svg"}
//                         alt="GIF"
//                         className="cursor-pointer rounded-lg"
//                         onClick={() => {
//                           setSelectedGif(gif.images.fixed_height.url)
//                           setShowGifPicker(false)
//                         }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

