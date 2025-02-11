import React, { useState } from "react";
import { Heart, MessageSquare, MoreHorizontal, Share2, Bookmark, User } from "lucide-react";
import axios from "axios";
import { Buffer } from "buffer";

const Post = ({ post, userId }) => {
  const [likes, setLikes] = useState(post.likes ? post.likes.length : 0);
  const [liked, setLiked] = useState(post.likes ? post.likes.includes(userId) : false);
  const [bookmarked, setBookmarked] = useState(post.bookmarks ? post.bookmarks.includes(userId) : false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleAction = async (action, text = "") => {
    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/posts/posts/${post._id}/action`, { userId, action, text });

      if (action === "like") {
        setLiked(prevLiked => !prevLiked);
        setLikes(prevLikes => (liked ? prevLikes - 1 : prevLikes + 1));
      } else if (action === "bookmark") {
        setBookmarked(prevBookmarked => !prevBookmarked);
      } else if (action === "comment") {
        setComments(response.data.post.comments);
        setCommentText("");
      }
    } catch (error) {
      console.error("Error updating action:", error);
    }
  };

  return (
    <div className="border-2 border-zinc-800 rounded-xl p-4">
      <div className="p-4" key={post._id}>
        <div className="border-2 border-zinc-800 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              {post.profilePic ? (
                <img src={post.profilePic} alt="Profile" className="w-12 h-12 rounded-full p-2 bg-zinc-800" />
              ) : (
                <User className="w-12 h-12 p-2 rounded-full bg-zinc-800" />
              )}

              <div>
                <p>{post.text}</p>
              </div>
            </div>
            <MoreHorizontal className="h-6 w-6" />
          </div>

          {/* Image Handling */}
          <div className="mt-4 aspect-video bg-zinc-900 rounded-xl flex items-center justify-center">
            {post.imageUrl && <img src={post.imageUrl} alt="Post" className="rounded-lg w-full" />}
            {post.image?.data && (
              <img
                src={`data:${post.image.contentType};base64,${Buffer.from(post.image.data, "binary").toString("base64")}`}
                alt="Post"
                className="rounded-lg w-full"
              />
            )}
          </div>
        </div>

        {/* Like, Bookmark, Share */}
        <div className="flex flex-row justify-between items-center p-2 ml-2 w-full">
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
            <button onClick={() => handleAction("bookmark")} className={bookmarked ? "text-yellow-500" : "text-white"}>
              <Bookmark />
            </button>
            <button onClick={() => handleAction("share")}>
              <Share2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
