import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import StartPage from "./pages/StartPage"
import UserPage from "./pages/AdminPage"
import AdminPage from "./pages/AdminPage"
import Book from "./pages/Book"
import SignIn from "./pages/SignIn"
import CreateAcc from "./pages/CreateAcc"
import Footer from "./components/Footer"
import BookContextProvider from "./contexts/BookContext"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookContextProvider>
        <Navbar />
            <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/adminPage" element={<AdminPage />} />
            <Route path="/book" element={<Book />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/createAccount" element={<CreateAcc />} />
            </Routes>
          <Footer />
        </BookContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
