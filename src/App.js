import Header from "./Components/Header";
import Attribution from "./Components/Attribution";
import Background from "./Components/Background";
import Main from "./Components/Main";

import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Background />
      <Main>
        <Header />
        <Card />
      </Main>
      <Attribution />
    </div>
  );
}

export default App;
