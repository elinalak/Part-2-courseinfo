import React from "react";
import Content from "./Content";
import Filter from "./Filter";

const MainScreen = () => {
  return <h4>Type something to start</h4>;
};

const Notification = () => {
  return <h5>Too many matches, please specify filter</h5>;
};

const Search = ({ query, countries }) => {
  if (query.length === 0) return <MainScreen />;
  else if (document.querySelectorAll("li").length > 10) return <Notification />;
  else if (
    document.querySelectorAll("li").length < 10 &&
    document.querySelectorAll("li").length > 1
  )
    return <Filter query={query} countries={countries} />;
  else if (document.querySelectorAll("li").length === 1)
    return <Content query={query} countries={countries} />;
  else return <Filter countries={countries} query={query} />;
};

export default Search;
