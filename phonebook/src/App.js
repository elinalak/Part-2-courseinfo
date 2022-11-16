import { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filtered, setFiltered] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNumber("");
    setNewName("");

    // eslint-disable-next-line
    persons.map(function (person, index) {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        setPersons(persons.concat(""));
        return <li key={index}>{person}</li>;
      }
    });
  };

  const handleNameChange = (event) => {
    console.log(event.target.value, `target name`);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value, `target number`);
    setNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFiltered(event.target.value, `target filter`);
  };

  const filterPerson = (event) => {
    console.log(filtered, `filtered`);
    event.preventDefault();

    let result = "no";

    persons.map(function (person) {
      if (person.name.startsWith(filtered) === true) {
        setFiltered(`${person.name} ${person.number}`);
        result = person.name;
        return <li key={person.id}>{person.number}</li>;
      }
    });

    return <ul> is {result}</ul>;
  };

  return (
    <div>
      <Header text="Phonebook" />
      <Filter
        handleFilterChange={handleFilterChange}
        filtered={filtered}
        filterPerson={filterPerson}
      />
      <Header text="Add a new" />
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Header text="Numbers" />
      <Persons persons={persons} />
    </div>
  );
};

export default App;
