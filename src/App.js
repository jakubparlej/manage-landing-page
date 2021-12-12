import "./App.scss";
import { Navbar } from "./components";
import { Header, About, Testimonials, CTA, Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
