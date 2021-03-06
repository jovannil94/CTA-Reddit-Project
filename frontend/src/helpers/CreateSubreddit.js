import React, { useState } from "react";
import axios from "axios";

const CreateSubreddit = ({updateSubreddits}) => {
    const [subname, setSubname] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3001/subreddits/`, {
                user_id: 1,
                subname: subname
        })
        setSubname("");
        updateSubreddits();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value = {subname} onChange = {(e) => setSubname(e.target.value)}/>
            <button type="submit">Create Subreddit</button>
        </form>
    )
}

export default CreateSubreddit;