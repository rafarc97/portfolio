import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
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
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
