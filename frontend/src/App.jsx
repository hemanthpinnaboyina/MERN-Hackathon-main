import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Restaurant from './components/Restaurants';
import RestaurantDetail from "./components/RestaurantDetails";
import { useContext } from "react";
import Cart from "./components/user/Cart";


const App = () => {

  const { user, setUser } = useContext(UserContext);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App