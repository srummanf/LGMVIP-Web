const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items=["I will always be there to remind you"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    var time = today.toLocaleTimeString('en-US');
    
    res.render("list", { kindOfDay: day, newListItems: items, kindOfTime: time });
})

app.post("/", function (req, res) {
    
    var item = req.body.newItem;
    items.push(item)
    res.redirect("/");

    

    

});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
})

