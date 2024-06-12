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
  {
    id: 4,
    title: "Fourth Post",
    body: "This is the fourth post.",
    author: "Jane Doe",
    date: "2021-01-04",
    comments: [{ id: 1, text: "Excellent post!", username: "John Doe" }],
  },
  {
    id: 5,
    title: "Fifth Post",
    body: "This is the fifth post.",
    author: "John Doe",
    date: "2021-01-05",
    comments: [{ id: 1, text: "Well-written post!", username: "Jane Doe" }],
  },
  {
    id: 6,
    title: "Sixth Post",
    body: "This is the sixth post.",
    author: "Jane Doe",
    date: "2021-01-06",
    comments: [{ id: 1, text: "Insightful post!", username: "John Doe" }],
  },
  {
    id: 7,
    title: "Seventh Post",
    body: "This is the seventh post.",
    author: "John Doe",
    date: "2021-01-07",
    comments: [{ id: 1, text: "Informative post!", username: "Jane Doe" }],
  },
  {
    id: 8,
    title: "Eighth Post",
    body: "This is the eighth post.",
    author: "Jane Doe",
    date: "2021-01-08",
    comments: [
      { id: 1, text: "Thought-provoking post!", username: "John Doe" },
    ],
  },
  {
    id: 9,
    title: "Ninth Post",
    body: "This is the ninth post.",
    author: "John Doe",
    date: "2021-01-09",
    comments: [{ id: 1, text: "Impressive post!", username: "Jane Doe" }],
  },
  {
    id: 10,
    title: "Tenth Post",
    body: "This is the tenth post.",
    author: "Jane Doe",
    date: "2021-01-10",
    comments: [{ id: 1, text: "Engaging post!", username: "John Doe" }],
  },
  {
    id: 11,
    title: "Eleventh Post",
    body: "This is the eleventh post.",
    author: "John Doe",
    date: "2021-01-11",
    comments: [{ id: 1, text: "Captivating post!", username: "Jane Doe" }],
  },
  {
    id: 12,
    title: "Twelfth Post",
    body: "This is the twelfth post.",
    author: "Jane Doe",
    date: "2021-01-12",
    comments: [{ id: 1, text: "Brilliant post!", username: "John Doe" }],
  },
  {
    id: 13,
    title: "Thirteenth Post",
    body: "This is the thirteenth post.",
    author: "John Doe",
    date: "2021-01-13",
    comments: [{ id: 1, text: "Inspirational post!", username: "Jane Doe" }],
  },
  {
    id: 14,
    title: "Fourteenth Post",
    body: "This is the fourteenth post.",
    author: "Jane Doe",
    date: "2021-01-14",
    comments: [{ id: 1, text: "Motivating post!", username: "John Doe" }],
  },
];

export default posts;
