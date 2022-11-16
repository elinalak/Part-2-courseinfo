import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0401234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
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
