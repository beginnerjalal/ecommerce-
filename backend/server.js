const express = require ("express");
const data = require('./data/backenddata');
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const productRoutes = require('./routes/productRoutes');
const {errorHandler} = require("./middlewares/errormiddlewares");
const usersRoutes = require('./routes/usersRoute');

// env configuration 
dotenv.config();
connectDB(); // connection to mongodb database 
const app = express();
app.use(express.json()); //middelware body parser

app.get("/", (req, res)=>{
res.send('<h1> welcome to node</h1>')
});

app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use(errorHandler);
const PORT = 8080
app.listen(process.env.PORT ||  PORT,()=>{
    console.log(`server is running in ${process.env.N0DE_ENV} mode on port ${process.env.PORT}`)
});