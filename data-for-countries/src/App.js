import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data[15].name, `response`);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const searchCountry = (event) => {
    event.preventDefault();

    countries.forEach((element) => {
      if (
        element.name.official.toLowerCase().includes(filtered.toLowerCase()) ===
        true
      )
        setResult(element.name.official);

      return <li key={countries}>{element.name.official} </li>;
    });

    return (
      <>
        <ul>{result}</ul>
      </>
    );
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setFiltered(event.target.value);
  };

  return (
    <>
      <form onSubmit={searchCountry}>
        <input type="search" onChange={handleChange} /> and press Enter
      </form>
      <ul>country is {result}</ul>
    </>
  );
};

export default App;
