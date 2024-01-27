import { createPost } from "../api/postsApi";
import { IPost } from "../types";

export async function addMutation(newPost: IPost, posts: IPost[]) {
  const createdPost = await createPost(newPost);
  return [...posts, createdPost];
}

export function createPostsOptions(newPost: IPost, posts: IPost[]) {
  return {
    optimisticData: [...posts, newPost],
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
}
