import { useState } from "react";

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
    persons.map(function (person, index) {
      if (filtered === person.name) {
        setFiltered(`${person.name} ${person.number}`);
        result = person.name;

        return <li key={index}>{person.number}</li>;
      }
    });

    return <p> is {result}</p>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={filterPerson}>
        filter shown with <input type="search" onChange={handleFilterChange} />{" "}
        press enter
      </form>
      <p> {filtered}</p>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} type="tel" onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
