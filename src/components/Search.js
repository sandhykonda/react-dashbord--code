import React from "react";
import { useDispatch } from "react-redux";
import { searchWidget } from "../store/actions";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchWidget(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search widgets..."
      onChange={handleSearch}
    />
  );
};

export default Search;
