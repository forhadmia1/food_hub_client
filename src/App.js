import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import OrderPage from "./Pages/OrderPage";
import RequiteAuth from './components/authentication/RequiteAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTotal } from './features/carts/cartSlice';
import AllOrderPage from './Pages/AllOrderPage';
import AdminPage from './Pages/AdminPage';
import AddItems from './components/admin/AddItems';
import Orders from './components/admin/Orders';
import Reviews from './components/admin/Reviews';
import Items from './components/admin/Items';
import Users from './components/admin/Users';


function App() {
  const carts = useSelector(state => state.carts)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts.carts))
    dispatch(getTotal())
  }, [carts.carts])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={
          <RequiteAuth>
            <AllOrderPage />
          </RequiteAuth>} />
        <Route path="/cart" element={
          <RequiteAuth>
            <OrderPage />
          </RequiteAuth>} />
        <Route path="/admin" element={<AdminPage />} >
          <Route path='addItem' element={<AddItems />} />
          <Route path='orders' element={<Orders />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='allItems' element={<Items />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
