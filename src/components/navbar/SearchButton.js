const SearchButton = () => {
  const buttonClick = () => {
    const input = document.getElementById("searchInput");
    const title = document.getElementById("navbarTitle");
    const svgOpen = document.getElementById("svgOpen");
    const svgClose = document.getElementById("svgClose");

    input.classList.toggle("hidden");
    title.classList.toggle("hidden");
    svgOpen.classList.toggle("hidden");
    svgClose.classList.toggle("hidden");
  };

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={buttonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            id="svgOpen"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            className=""
          />
          <path
            id="svgClose"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
            className="hidden"
          />
        </svg>
      </button>
    </>
  );
};

export default SearchButton;
