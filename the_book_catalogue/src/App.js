import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        </Routes>
      </BrowserRouter>
      <h1>Test</h1>
    </div>
  );
}

export default App;
