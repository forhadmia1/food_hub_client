import Navbar from "./components/Home/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
