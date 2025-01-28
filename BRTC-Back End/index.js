const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require('dotenv');
const cors=require("cors");
const path = require("path");

const productRoute=require("./routes/product");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");








dotenv.config();
const port = process.env.PORT || 5000;
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Exit the process if DB connection fails
  }
};

app.use(express.json());

app.use("/api/products",productRoute);
app.use("/api/register",userRoute);
app.use("/api/auth",authRoute);
app.use('/api',require('./routes/payment'))



app.get('/', (req, res) => {
  res.send('App is working');
});
const startServer = async () => {
  await connect(); // Ensure database connection is established
  app.listen(port, () => {
    console.log(port);
  });
};

startServer();
