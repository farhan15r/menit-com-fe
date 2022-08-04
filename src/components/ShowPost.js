import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.js";

const ShowPost = () => {
  const [post, setPost] = useState({});
  const [found, setFound] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    getPost(slug);
  }, [slug]);

  const getPost = async (slug) => {
    const response = await fetch(`http://192.168.100.13:3000/${slug}`);
    if (response.status !== 404) {
      const data = await response.json();
      setPost(data);
      return;
    }
    setFound(false);
  };

  const Post = () => {
    return (
      <div className="container flex justify-center pt-20">
        <div className="w-full md:w-8/12 block">
          <div className="card card-compact bg-base-100 shadow-xl overflow-hidden max-h-96">
            <figure>
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="w-full"
              />
            </figure>
          </div>
          <h1>{post.title}</h1>
        </div>
      </div>
    );
  };

  return <>{found ? <Post /> : <NotFound />}</>;
};

export default ShowPost;
