import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    if (event.keyCode === 13) {
      event.target.blur();
      navigate(`/results?search_query=${query}`);
    }
  };

  return (
    <div
      id="searchInput"
      className="form-control pr-2 hidden w-full max-w-md min-w-0"
    >
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          search(e);
        }}
      />
    </div>
  );
};

export default SearchInput;
