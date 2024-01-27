import Post from "./Post";
import { IPost } from "../types";

interface PostsProps {
  posts: IPost[] | undefined;
  isLoading: boolean;
  error: any;
}

const Posts: React.FC<PostsProps> = ({ posts, error, isLoading }) => {
  if (error) return <p>Error {error}</p>;
  if (isLoading) return <p>Loading....</p>;
  return (
    <section>
      <h1 className="text-4xl text-center">Posts</h1>
      {posts?.map((post) => {
        return <Post key={post.id} title={post.title} body={post.body} />;
      })}
    </section>
  );
};

export default Posts;
