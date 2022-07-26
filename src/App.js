import Navbar from "./components/Home/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
