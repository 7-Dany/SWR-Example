import { IPost } from "../types";

interface PostProps {
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className="p-8">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
