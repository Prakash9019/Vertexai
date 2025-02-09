import React, { useState } from "react";
import { Heart, MessageSquare,MoreHorizontal, Share2, Bookmark } from "lucide-react";
import axios from "axios";

import { Buffer } from 'buffer';
import logo2 from "../../assets/logohome.png"
const Post = ({ post, userId }) => {
  const [likes, setLikes] = useState(post.likes ? post.likes.length : 0);
  const [liked, setLiked] = useState(post.likes ? post.likes.includes(userId) : 0 );
  const [bookmarked, setBookmarked] = useState(post.bookmarks ? post.bookmarks.includes(userId) : 0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleAction = async (action, text = "") => {
    try {
      const response = await axios.put(`/api/posts/${post._id}/action`, { userId, action, text });

      if (action === "like") {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
      } else if (action === "bookmark") {
        setBookmarked(!bookmarked);
      } else if (action === "comment") {
        setComments(response.data.comments);
        setCommentText("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [base64, setBase64] = useState(null);
  const [mimeType, setMimeType] = useState(null);
    
  
  // useEffect(() => {
  //   if (post.image && post.image.data) {
  //     const base64String = Buffer.from(post.image.data, "binary").toString("base64");
  //     setBase64(base64String);
  //     setMimeType(post.image.contentType);
  //   }
  // }, [post.image]); // ✅ Runs only when `post.image` changes
  

  return (
    <div className="border-2 border-zinc-800 rounded-xl p-4">








<div className="p-4" key={post._id}>
            <div className="border-2 border-zinc-800 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                <img src={logo2} className="w-12 h-12 rounded-full bg-zinc-800" />
                  <div>
                    {/* <h3 className="font-bold">{post.title}</h3> */}
                    <p>
                      {post.text}
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <div className="mt-4 aspect-video bg-zinc-900 rounded-xl flex items-center justify-center">
                {/* <h2 className="text-3xl font-bold text-center">
                  Original Release on
                  <br />
                  26 January, 2025
                </h2> */}
                   {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
                   {post.image && <img src={ post.image.data ?`data:${post.image.contentType};base64,${Buffer.from(post.image.data, "binary").toString("base64")} ` : `data:image/jpeg;base64,${post.image}`} alt="Post" />}
              </div>

              
            </div>
            <div className="flex flex-row justify-between items-center p-2 ml-2  w-full"> 
              <div className="flex gap-4"> 
              <div className="flex gap-2">
          <button onClick={() => handleAction("like")} className={liked ? "text-red-500" : "text-white"}>
            <Heart />
          </button>
          <span>{likes}</span>
        </div>
        
         <MessageSquare />  
             </div>  
             <div className="flex gap-2"> 
             <button onClick={() => handleAction("bookmark")} className={bookmarked ? "text-yellow-500" : "text-white"}>  <Bookmark /> </button>    
              <button onClick={() => handleAction("share")}> <Share2 />  </button> 
              </div>
            </div>
          </div>









      {/* <h1>{post.title}</h1>

      {post.image && <img src={`data:image/jpeg;base64,${post.image}`} alt="Post" className="w-full h-auto rounded-lg mt-2" />}

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button onClick={() => handleAction("like")} className={liked ? "text-red-500" : "text-white"}>
            <Heart />
          </button>
          <span>{likes}</span>
        </div>

        <button className="flex gap-2" onClick={() => handleAction("share")}>
          <Share2 />
        </button>

        <button onClick={() => handleAction("bookmark")} className={bookmarked ? "text-yellow-500" : "text-white"}>
          <Bookmark />
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="border border-gray-700 rounded-md p-2 w-full"
        />
        <button onClick={() => handleAction("comment", commentText)} className="mt-2 p-2 bg-blue-500 text-white rounded-md">
          Comment
        </button>

        {comments.map((comment, index) => (
          <p key={index} className="mt-2 text-gray-400">
            {comment.text}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default Post;
