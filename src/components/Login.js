import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RegisterSuccess = ({ msg }) => {
  return (
    <div className="alert alert-success shadow-lg mt-3 block">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{msg}</span>
      </div>
    </div>
  );
};

const Login = () => {
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      const { status, msg } = state;
      setStatus(status);
      setMsg(msg);
    }
  }, [state]);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="max-w-md mt-18">
        <div className="card card-compact w-96 bg-base-100 shadow-xl px-3 py-5">
          <h1 className="font-bold text-3xl text-center">Login</h1>
          {status === "success" && <RegisterSuccess msg={msg} />}
          <form>
            <div className="form-control w-full my-3">
              <label className="label mt-2">
                <span className="label-text">Username or e-mail</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                autoFocus
              />

              <label className="label mt-2">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-full">
              Login
            </button>
          </form>
          <Link to={"/register"} className="btn btn-outline btn-primary mt-3">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
