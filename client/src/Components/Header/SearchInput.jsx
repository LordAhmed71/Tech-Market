import { Search } from "../../Assets";

const SearchInput = ({ className }) => {
  return (
    <form className={`searchContainer ${className}`}>
      <input type="text" className="input" placeholder="Search for anything" />
      <img src={Search} alt="" className="search" />
    </form>
  );
};

export default SearchInput;
