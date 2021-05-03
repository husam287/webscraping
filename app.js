// ##### Packages import #####
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

// ##### Middlewares import #####
const allowingHeadersMiddleware = require("./middlewares/headers");
const errorsMiddleware = require("./middlewares/errors");

// ##### Routes import #####
const testRouter = require("./routes/test");


// ##### Set environment varibales for development #####
process.env.NODE_ENV != "production" && require("dotenv").config();

// ##### Express app #####
const app = express();

// ##### Deployment Packages #####
app.use(helmet());

// Global middlewares
app.use(allowingHeadersMiddleware);
app.use(bodyParser.json());

// ##### Routes #####
app.use("/api", testRouter);


// Errors middleware
app.use(errorsMiddleware);

// Connect to database and start server
app.listen(process.env.PORT || 3000);
