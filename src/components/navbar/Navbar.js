import Profile from "./Profile";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 z-50 shadow-xl">
      <div className="container justify-between">
        <div className="flex">
          <Link
            id="navbarTitle"
            className="btn btn-ghost normal-case text-2xl sm:flex align-baseline"
            to="/"
          >
            Menit.com
          </Link>
        </div>
        <div className="flex w-full justify-end">
          <SearchInput />
          <SearchButton />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
