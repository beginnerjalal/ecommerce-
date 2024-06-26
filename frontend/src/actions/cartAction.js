import axios from "axios";

export const addToCart = (id, qty) => async(dispatch,getState)=>{
    console.log(id.id, "from action");
    const ID = id.id === undefined ? id : id.id
    const {data} = await axios.get(`/api/products/${ID}`);
    dispatch({
        type:'CART_ADD_ITEM',
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty,
        },
    });
    localStorage.setItem('cartitems',JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart = (id) => async(dispatch,getState)=>{
    // console.log(id.id, "from action");
    // const {data} = await axios.get(`/api/products/${id.id}`);
    dispatch({
        type:'CART_REMOVE_ITEM',
        payload:id
    });
    localStorage.setItem('cartitems',JSON.stringify(getState().cart.cartItems));

};