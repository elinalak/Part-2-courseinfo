import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Search from "./Search";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data[15], `response`);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Form handleChange={handleChange} />
      <Search query={query} countries={countries} />
    </>
  );
};

export default App;
