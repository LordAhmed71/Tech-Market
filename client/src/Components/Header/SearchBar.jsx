import { Close } from "../../Assets";
const SearchBar = ({ show, toggleShow }) => {
  return (
    <>
      {show && (
        <div className="searchBar">
          <form className="searchInput">
            <input type="text" placeholder="Search for anything" />
            <img src={Close} alt="" onClick={toggleShow} />
          </form>
        </div>
      )}
    </>
  );
};

export default SearchBar;
