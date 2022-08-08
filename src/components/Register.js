import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Error = ({ msg }) => {
  return (
    <div className="alert alert-error shadow-lg block mt-3">
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{msg}</span>
      </div>
    </div>
  );
};

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://192.168.100.13:5000/users", {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        confPassword: confPassword,
      })
      .then((res) => {
        navigate("/login", {
          state: { status: res.data.status, msg: res.data.msg },
        });
      })
      .catch((e) => {
        setStatus(e.response.data.status);
        setMsg(e.response.data.msg);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className="hero">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="mt-28 mb-14">
        <div className="card card-compact md:w-[500px] bg-base-100 shadow-xl px-3 py-5">
          <h1 className="font-bold text-3xl text-center">Register</h1>
          {status === "error" && <Error msg={msg} />}
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="form-control w-full my-3">
              <label className="label mt-2">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                autoFocus
              />

              <label className="label mt-2">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label className="label mt-2">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label className="label mt-2">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <label className="label mt-2">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={confPassword}
                onChange={(e) => {
                  setConfPassword(e.target.value);
                }}
              />

              <label className="label cursor-pointer mt-2">
                <span className="label-text">
                  I agree about Terms of Service and Privacy Policy
                </span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={agree}
                  onChange={(e) => {
                    setAgree(!agree);
                  }}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-full">
              Register
            </button>
          </form>
          <Link to={"/login"} className="btn btn-outline btn-primary mt-3">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
