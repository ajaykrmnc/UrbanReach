const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const contactusrouter = require("./Routes/ContactRoutes");
const carrieroutes = require("./Routes/CarrierRoutes");
const ApplyRoutes = require("./Routes/ApplyRoutes");
const uploadRouter = require("./Routes/Fileupload");

// app
const app = express();

// db
mongoose.connect(process.env.CONNECTION_URL,function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
});


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/ur", contactusrouter);
app.use("/ur", carrieroutes);
app.use("/ur", ApplyRoutes);
app.use("/ur", uploadRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
