import { Search } from "../../Assets";

const SearchInput = ({ className }) => {
  return (
    <div className={`searchContainer ${className}`}>
      <input type="text" className="input" placeholder="Search for anything" />
      <img src={Search} alt="" className="search" />
    </div>
  );
};

export default SearchInput;
