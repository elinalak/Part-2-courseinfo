import React from "react";

const Content = () => {
  return <>Too many matches, please specify filter</>;
};

const Search = ({ query, countries }) => {
  const Filter = () => {
    return (
      <ul>
        {countries.map(function (country, index) {
          const liTag = document.querySelectorAll("li");
          console.log(liTag.length);

          if (
            country.name.official
              .toLowerCase()
              .includes(query.toLocaleLowerCase()) === true &&
            1 < liTag.length < 10
          )
            return <li key={index}>{country.name.official}</li>;
          if (
            country.name.official
              .toLowerCase()
              .includes(query.toLocaleLowerCase()) === true &&
            0 < liTag.length < 2
          )
            return <li key={index}>{country.name.official}</li>;
        })}
      </ul>
    );
  };

  if (query.length === 0) return <Content />;
  else return <Filter />;
};

export default Search;
