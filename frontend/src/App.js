import logo from "./logo.svg";
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/screen/home";
import ProductDetail from "./component/screen/productDetail";
import CartScreen from "./component/screen/cartScreen";
import LoginScreen from "./component/screen/loginScreen";
import UserRegistrationScreen from "./component/screen/userRegisterScreen";
import ProfileScreen from "./component/screen/profileScreen";
import ShippingScreen from "./component/screen/shippingScreen";
import PaymentScreen from "./component/screen/PaymentMethod";
import PlaceOrderScreen from "./component/screen/placeOrderScreen";
import OrderScreen from "./component/screen/orderScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
      <Route path="/" Component={Home} exact />
      <Route path="/login" element={<LoginScreen />}  />
      <Route path="/payment" Component={PaymentScreen} />
      <Route path="/order/:id" element={<OrderScreen />} />
      <Route path="/placeorder" Component={PlaceOrderScreen}  />

      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/register" element={<UserRegistrationScreen />}   />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart/:id?" element={<CartScreen />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
