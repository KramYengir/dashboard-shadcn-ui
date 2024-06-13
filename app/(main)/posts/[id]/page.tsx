import React from "react";
import posts from "@/data/posts";
import BackButton from "@/components/BackButton";

interface PostPageProps {
  params: {
    id: number;
  };
}

const PostPage = ({ params }: PostPageProps) => {
  const { id } = params;
  const post = posts.find((post) => post.id == id);

  return (
    <>
      <BackButton text="Back to Dashboard" href="/" />
      <h1 className="text-2xl font-semibold">
        {post?.title || "Post not found, sorry"}
      </h1>
      <small>{post && `by ${post.author}`}</small>
      <p className="mt-6">{post?.body}</p>
      {post?.comments && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4">Comments</h2>
          <ul className="grid gap-2">
            {post.comments.map((comment, index) => (
              <li key={index} className="p-2rounded-md">
                <strong>{comment.username}:</strong>{" "}
                <p className="font-light">{comment.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PostPage;
