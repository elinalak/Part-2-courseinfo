import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data[15].name, `response`);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <form>
        <input type="search" onChange={handleChange} /> and press Enter
      </form>
      <ul>
        country is{" "}
        {countries.map(function (country, index) {
          if (query.length === 0)
            return <li key={index}>{country.name.official}</li>;
          if (
            country.name.official
              .toLowerCase()
              .includes(query.toLocaleLowerCase()) === true
          )
            return <li key={index}>{country.name.official}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
