import Navbar from "./components/Home/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ShowFoods from "./components/Menu/ShowFoods";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />}>
          {/* <Route index element={<ShowFoods category={''} />} />
          <Route path="all" element={<ShowFoods category={''} />} />
          <Route path="desserts" element={<ShowFoods category={'desserts'} />} />
          <Route path="dinner" element={<ShowFoods category={'dinner'} />} />
          <Route path="drink" element={<ShowFoods category={'drink'} />} />
          <Route path="meat" element={<ShowFoods category={'meat'} />} />
          <Route path="starters" element={<ShowFoods category={'starters'} />} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
