const mongoose = require("mongoose");
require("colors")
const dotenv = require("dotenv");
const users = require("./data/users");
const User = require("./model/userModel");
const Product = require("./model/productModel");
const Order = require("./model/orderModel");
const Products = require("./data/backenddata");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const importData = async() =>{
try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users)
    const adminUser = createUser[0]._id
    const sampleData = Products.map((prod)=>{
        return {...prod, user:adminUser}
    });
    await Product.insertMany(sampleData);
    console.log("data imported ".yellow.inverse);
    process.exit()
} catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
}
};

const dataDestroy = async() =>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("data deleted from db sucessfully".yellow.inverse);
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }

}
if (process.argv[2] === "-d") {
    dataDestroy();
}else{
    importData();
}