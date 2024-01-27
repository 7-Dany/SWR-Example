"use client";
import { createPost } from "./api/postsApi";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import usePost from "./data/usePost";
import { IPost } from "./types";

export default function Home() {
  const { posts, error, isLoading, mutate } = usePost();

  async function createNewPost(post: IPost) {
    try {
      await createPost(post);
      mutate()
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
