import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/project";
import Certifications from "./components/Certifications";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="lg:ml-72 pt-16 lg:pt-0 overflow-x-hidden">
        <Hero />
        <Projects />
        {/* Placed inside main so it aligns perfectly beside the sidebar */}
        <Certifications />
      </main>
    </>
  );
}

export default App;