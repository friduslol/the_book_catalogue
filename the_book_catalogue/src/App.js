import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import StartPage from "./pages/StartPage"
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signIn" element={<SignIn />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
