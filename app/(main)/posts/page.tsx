import React from "react";
import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Back to Dashboard" href="/" />
      <PostTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
