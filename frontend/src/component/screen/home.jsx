import React, {useEffect} from "react";
import ProductScreen from "./productScreen";
import { Col, Row } from "react-bootstrap";
// import axios from 'axios' as used redux now 
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../../actions/productAction';
import Loader from "../loader";
import Errormessage from "../errormessage";

const Home = () => {
  // const [product,setProducts] = useState([]); conected with redux thats why commented.
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList
  useEffect(()=>{

     // conected with redux thats why commented.
    // const fetchProducts = async()=>{
      // const res = await axios.get("/api/products");
      // setProducts(res.data)
      // console.log(res.data,"data",res.status);
    // }
    // fetchProducts();

    dispatch(listProducts());
  }, [dispatch]);
  // const product = [];
  return (
    <>
    {
      loading ? <Loader/> : error ? <Errormessage varient='danger'>{error}</Errormessage> :
      <Row>
            {
                products.map(product =>(
                    <Col key={product._id} md={3}>
                    <ProductScreen prod = {product}/>
                    </Col>
                ))
            }
      </Row>
}
    </>
  );
};

export default Home;
