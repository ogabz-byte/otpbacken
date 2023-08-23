require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002;



// middleware
app.use(express.json());
//define cors
app.use(
  cors({
    origin: ["http://localhost:3000", "https://otp-mt3n.onrender.com"], // Add more origins as needed
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // If your frontend sends cookies or credentials
  })
);

app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
