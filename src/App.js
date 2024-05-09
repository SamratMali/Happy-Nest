import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Ragisterpages from "./pages/Ragisterpages";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/register" element={<Ragisterpages />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
