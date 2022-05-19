import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
