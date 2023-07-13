import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { useLocation } from "react-router-dom";

const PostPage = () => {

  const {
    state: { post },
  } = useLocation();
  console.log(post);

  return (
    <MainTemplate>
        <h1>
          #{post.id} {post.title}
        </h1>
        <h3>{post.author}</h3>
        <span>{post.category}</span>

      <div dangerouslySetInnerHTML={{__html:post.content}}/>
    </MainTemplate>
  );
};

export default PostPage;
