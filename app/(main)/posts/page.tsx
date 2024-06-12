import React from "react";
import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Back to Dashboard" href="/" />
      <PostTable />;
    </>
  );
};

export default PostsPage;
