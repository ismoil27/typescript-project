import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Status from "./components/Status";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Ismoiljon",
    last: "Abduraimov",
  };

  const nameList = [
    {
      id: 1,
      first: "Ismoiljon",
      last: "Abduraimov",
    },
    {
      id: 2,

      first: "Bob",
      last: "Marley",
    },
    {
      id: 3,

      first: "Jack",
      last: "Biship",
    },
  ];

  return (
    <div className="App">
      <Greet name="Ismoiljon" messageCount={25} isLoggedIn={false} />
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      <Status status="success" />
      <Header>Placeholder here</Header>
    </div>
  );
}

export default App;
