import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TypingTest from "./components/TypingTest";
import Experience from "./pages/Experience";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/typing-test" element={<TypingTest />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;