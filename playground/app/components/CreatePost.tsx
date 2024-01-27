import { IPost } from "../types";
import { ChangeEvent, FormEvent, useState } from "react";

interface CreatePostProps {
  createNewPost: (post: IPost) => Promise<void>;
}

const CreatePost: React.FC<CreatePostProps> = ({ createNewPost }) => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPostData((prevPostData) => ({
      ...prevPostData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await createNewPost(postData);
    setPostData({ title: "", body: "" });
  }

  return (
    <section className="m-10">
      <h1 className="text-4xl text-center m-8">Create Post</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <fieldset className="flex gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="text-stone-900"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={postData.title}
          />
        </fieldset>
        <fieldset className="flex gap-2">
          <label htmlFor="body">Body</label>
          <input
            className="text-stone-900"
            type="text"
            id="body"
            name="body"
            onChange={handleChange}
            value={postData.body}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
