const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const logger = require("morgan");
var cors = require('cors')
const connection = require("./config/db");
const runSocket = require('./routes/sockets');


//importing routes
const routes = require("./routes/route");

//setting global variables
const PORT = process.env.PORT || 2000;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//setting up view engines
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + '/views/partials/'
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static("views"));
app.use(cors());

//sockets

io.on('connection', function(socket, io) {
  //console.log('Client connected...');

  runSocket(socket, io);

});


//adding middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//using imported routes
app.use("/", routes);

//setting up server
server.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));