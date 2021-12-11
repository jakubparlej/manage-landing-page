import "./App.scss";
import { Navbar } from "./components";
import { Header, About, Testimonials, CTA } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
