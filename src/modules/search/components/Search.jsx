import React from "react";
import { Input } from "antd";

const InputSearch = Input.Search;

const Search = ({ onSearch }) => (
  <InputSearch
    placeholder="Enter the name of the album"
    size="large"
    onSearch={value => (value.length ? onSearch(value) : false)}
    className="search"
    enterButton
  />
);
export default Search;
