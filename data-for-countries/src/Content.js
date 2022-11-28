import React from "react";

const Content = ({ countries, query }) => {
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
                {Object.entries(country.languages).map(function ([key, value]) {
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

export default Content;
