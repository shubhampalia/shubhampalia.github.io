import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { WanderLust } from "./components/Wanderlust";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Squash } from "./components/Squash";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Squash />
      <WanderLust />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
