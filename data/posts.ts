import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post.",
    author: "John Doe",
    date: "2021-01-01",
    comments: [
      {
        id: 1,
        text: "Great post!",
        username: "Jane Doe",
      },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post.",
    author: "Jane Doe",
    date: "2021-01-02",
    comments: [
      {
        id: 1,
        text: "Awesome post!",
        username: "John Doe",
      },
    ],
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post.",
    author: "John Doe",
    date: "2021-01-03",
    comments: [
      {
        id: 1,
        text: "Amazing post!",
        username: "Jane Doe",
      },
    ],
  },
];
