const   express = require("express"),
        app = express(),
        PORT = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
    secret: "benward loves Sharifa",
    resave: false,
    saveUninitialized: false
}));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/patatap", function(req, res) {
    res.render("circles");
});

app.listen(PORT, process.env.IP, function () {
    console.log("Server started at:" + PORT);
});