const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

//Routes
const customersRoutes = require("./routes/customers");
const settingsRoutes = require("./routes/settings");
const accountRoutes = require("./routes/account");
const loanRoutes = require("./routes/loan");
const authRoutes = require("./routes/auth.routes");

const api = process.env.API_URL;

app.use(`${api}/customers`, customersRoutes);
app.use(`${api}/settings`, settingsRoutes);
app.use(`${api}/account`, accountRoutes);
app.use(`${api}/loan`, loanRoutes);
app.use(`${api}/auth`, authRoutes);

// Middleware
app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));

// Database connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "BankManagement",
  })
  .then(() => {
    console.log("Database Connection is ready...");
    // Start the server only after the database connection is established
    app.listen(3001, () => {
      console.log("Server is running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
