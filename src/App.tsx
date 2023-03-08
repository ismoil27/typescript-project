import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Ismoiljon" messageCount={25} isLoggedIn={false} />
    </div>
  );
}

export default App;
