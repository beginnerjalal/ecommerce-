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

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
      <Route path="/" Component={Home} exact />
      <Route path="/login" element={<LoginScreen />}  exact />
      <Route path="/profile" element={<ProfileScreen />} exact/>
      <Route path="/register" element={<UserRegistrationScreen />}  exact />
      <Route path="/product/:id" element={<ProductDetail />} exact/>
      <Route path="/cart/:id?" element={<CartScreen />} exact/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
