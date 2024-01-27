import { Fetcher } from "swr";
import { IPost } from "../types";

const baseUrl = "http://localhost:3500";

export const getPosts: Fetcher<IPost[], string> = async (key: string) => {
  const response = await fetch(`${baseUrl}${key}`);
  const data = await response.json();
  return data;
};

export const createPost = async (post: IPost) => {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
