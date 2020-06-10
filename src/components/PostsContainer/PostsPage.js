//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'

const PostsPage = (props) => {
  // set up state for your data
  console.log(props)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
        {props.post.map((item) => (
          <Post post={item} />
        ))}
    </div>
  );
};

export default PostsPage;
