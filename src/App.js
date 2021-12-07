import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { Cv } from "./components/Cv.jsx";
import { Ahora } from "./components/Ahora.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Projects } from "./components/Projects.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.css";

// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/ahora" element={<Ahora />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
