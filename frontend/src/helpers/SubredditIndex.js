import React from "react";

const SubredditIndex = ({subreddits}) => {
    return(
        <div>
            <ul>
                {subreddits.map(subreddit => (
                    <li key={subreddit.id}>
                        {subreddit.subname}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubredditIndex;