const   express = require("express"),
        app = express();

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

app.listen(process.env.PORT, process.env.IP);
