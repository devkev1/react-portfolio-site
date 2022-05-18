import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
