"use client";
import {
  addMutation as createPost,
  createPostsOptions,
} from "./helpers/postsMutations";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import usePost from "./data/usePost";
import { IPost } from "./types";

export default function Home() {
  const { posts, error, isLoading, mutate } = usePost();

  async function createNewPost(newPost: IPost) {
    try {
      await mutate(
        createPost(newPost, posts as IPost[]),
        createPostsOptions(newPost, posts as IPost[])
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="p-8">
      <CreatePost createNewPost={createNewPost} />
      <Posts posts={posts} error={error} isLoading={isLoading} />
    </main>
  );
}
