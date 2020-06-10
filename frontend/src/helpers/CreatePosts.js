import React, { useState } from "react";
import axios from "axios";

const CreatePost = ({updatePosts}) => {
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])

    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();
        await axios.post(`http://localhost:3001/subreddits/`, {
                user_id: 1,
                title: title,
                body: body
        })
        setTitle("");
        setBody("");
        updatePosts();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            <textarea value = {body} onChange = {(e) => setBody(e.target.value)}/>
            <button type="submit">Create Post</button>
        </form>
    )
}

export default CreatePost;