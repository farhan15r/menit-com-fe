import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostsView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://192.168.100.13:5000/posts");
    const data = await response.json();

    setPosts(data);
  };

  return (
    <div className="container flex flex-wrap mt-20 justify-center">
      {posts.map((post, index) => {
        return (
          <Link
            key={index}
            className="w-full md:w-1/2 xl:w-1/3 hover:scale-105 transition "
            to={`/${post.slug}`}
          >
            <div className="card bg-base-100 shadow-2xl m-2">
              <figure>
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className="w-full"
                />
                <div className="badge badge-secondary text-xs xl:text-base absolute right-3 top-3">
                  NEW
                </div>
              </figure>
              <div className="card-body h-48">
                <h2 className="card-title text-base md:text-lg lg:text-xl">
                  {post.title}
                </h2>
                <p className="text-base">{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{post.category}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostsView;
