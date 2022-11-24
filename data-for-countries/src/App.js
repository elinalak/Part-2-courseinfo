import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [result, setResult] = useState(["searching..."]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data[15].name, `response`);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const searchCountry = (event, result) => {
    event.preventDefault();

    countries.forEach((element, index) => {
      if (
        element.name.common.toLowerCase().includes(filtered.toLowerCase()) ===
          true ||
        element.name.official.toLowerCase().includes(filtered.toLowerCase()) ===
          true
      ) {
        result = element.name.official;
        setResult(result);

        console.log(result, `result is`);
        return <li key={index}>{result}</li>;
      }
    });

    console.log(result, `the lastest result`);

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

  if (result)
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
