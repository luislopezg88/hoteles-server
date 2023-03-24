require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/static", express.static(__dirname + "/public"));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

require("./routes/buildings.routes")(app);

server.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
