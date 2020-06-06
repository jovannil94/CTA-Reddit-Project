import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../utilities/apiURL";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const API = apiURL();

    useEffect(() => {
        const fetchPosts = async () => {
            debugger
            let res = await axios({
                method: "get",
                url: `${API}/posts/`
            })
            setPosts(res.data.payload)
        }
        fetchPosts();
    }, [])

    return(
        <div>
            <h1>HomePage</h1>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        {post.body}
                        {post.picture}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage;