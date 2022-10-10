import Header from "./Components/Header";
import Attribution from "./Components/Attribution";
import Background from "./Components/Background";

import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Card />
      <Attribution />
    </div>
  );
}

export default App;
