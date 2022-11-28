import React from "react";

const Filter = ({ countries, query }) => {
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

export default Filter;
