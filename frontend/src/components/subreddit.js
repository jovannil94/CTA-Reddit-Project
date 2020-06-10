import React, { useState, useEffect } from "react";
import CreateSubreddit from "../helpers/CreateSubreddit";
import axios from "axios";
import { apiURL } from "../utilities/apiURL";
import SubredditIndex from "../helpers/SubredditIndex";

const Subreddit = () => {
    const [subreddits, setSubreddits] = useState([]);
    const API = apiURL();
    
    const fetchSubreddits = async () => {
        try {
            let res = await axios({
                method: "get",
                url: `${API}/subreddits/`
            })
            setSubreddits(res.data.payload)    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSubreddits();
    }, [])

    return(
        <div>
            <CreateSubreddit updateSubreddits={fetchSubreddits}/>
            <SubredditIndex subreddits={subreddits}/>
        </div>
    )
}

export default Subreddit;