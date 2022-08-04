import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">404 NOT FOUND</h1>
          <p className="mb-5">
            This page is not available. We are sorry. <br />
            Please recheck the URL or back to Home
          </p>
          <Link className="btn btn-primary" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
