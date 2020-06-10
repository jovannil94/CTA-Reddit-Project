import React, { useState, useEffect } from "react";
import CreatePost from "../helpers/CreatePosts";
import axios from "axios";
import { apiURL } from "../utilities/apiURL";
import PostIndex from "../helpers/PostIndex";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const API = apiURL();
    
    const fetchPosts = async () => {
        try {
            let res = await axios({
                method: "get",
                url: `${API}/posts/`
            })
            setPosts(res.data.payload)    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return(
        <div>
            <CreatePost updatePosts={fetchPosts}/>
            <PostIndex posts={posts}/>
        </div>
    )
}

export default Post;