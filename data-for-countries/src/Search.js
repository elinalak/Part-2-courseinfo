import React from "react";

const MainScreen = () => {
  return <h4>Type something to start</h4>;
};

const Notification = () => {
  return <h5>Too many matches, please specify filter</h5>;
};

const Search = ({ query, countries }) => {
  const Content = () => {
    return (
      <ul>
        {countries.map(function (country, index) {
          const liTag = document.querySelectorAll("li");
          console.log(liTag.length);

          if (
            country.name.official
              .toLowerCase()
              .includes(query.toLocaleLowerCase()) === true
          ) {
            return (
              <>
                <h3 className="country" key={index}>
                  {country.name.official}
                </h3>
                <p>capital {country.capital.map((i) => i)}</p>
                <p>area {country.area}</p>
                <ul>
                  languages: <br />
                  {Object.entries(country.languages).map(function ([
                    key,
                    value,
                  ]) {
                    return <li key={key}>{value}</li>;
                  })}
                </ul>
                <img alt="flag" src={country.flags.svg} width={250} />
              </>
            );
          }
        })}
      </ul>
    );
  };

  const Filter = () => {
    return (
      <ul>
        {countries.map(function (country, index) {
          const liTag = document.querySelectorAll(".country");
          console.log(liTag.length);

          if (
            country.name.official
              .toLowerCase()
              .includes(query.toLocaleLowerCase()) === true
          )
            return (
              <li key={index} className="country">
                {country.name.official}{" "}
                <span>
                  <button>+</button>
                </span>
              </li>
            );
        })}
      </ul>
    );
  };

  if (query.length === 0) return <MainScreen />;
  else if (document.querySelectorAll("li").length > 10) return <Notification />;
  else if (
    document.querySelectorAll("li").length < 10 &&
    document.querySelectorAll("li").length > 1
  )
    return <Filter />;
  else if (document.querySelectorAll("li").length === 1) return <Content />;
  else return <Filter />;
};

export default Search;
