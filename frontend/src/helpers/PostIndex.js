import React from "react";

const PostIndex = ({posts}) => {
    return(
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        {post.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostIndex;