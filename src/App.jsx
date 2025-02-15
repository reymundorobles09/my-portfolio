import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import MyProjects from "./sections/MyProjects";
import ContactMe from "./sections/ContactMe";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
    </div>
  )
}

export default App
