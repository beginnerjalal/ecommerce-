import logo from "./logo.svg";
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/screen/home";
import ProductDetail from "./component/screen/productDetail";
import CartScreen from "./component/screen/cartScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
      <Route path="/" Component={Home} exact />
      <Route path="/product/:id" element={<ProductDetail />} exact/>
      <Route path="/cart/:id?" element={<CartScreen />} exact/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
