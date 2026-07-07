import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TypingTest from "./components/TypingTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/typing-test" element={<TypingTest />} />
    </Routes>
  );
}

export default App;