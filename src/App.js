import "./App.scss";
import { Navbar } from "./components";
import { Header, About } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
