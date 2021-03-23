const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Add routes
app.use(routes);

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbooksearch",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Start server
app.listen(PORT, function(){
    console.log('API server now listening on PORT ' + PORT);
})