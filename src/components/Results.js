import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const Results = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const parsed = queryString.parse(search);

  useEffect(() => {
    getPosts(search);
  }, [search]);

  const getPosts = async (search) => {
    const response = await fetch(`http://192.168.100.13:5000/search${search}`);
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="container pt-20 flex flex-wrap justify-center">
      <div className="w-full md:w-8/12">
        <h3 className="font-semibold text-slate-800 pb-2">
          Found {posts.length} results from your search "{parsed.search_query}"
        </h3>
        {posts.map((post, index) => {
          return (
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl mb-5"
            >
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/${post.slug}`}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read</button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
