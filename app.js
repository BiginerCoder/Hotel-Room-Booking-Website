
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/Listing.js");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");

// Set up the view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Connect to MongoDB
const mongo_url = "mongodb://127.0.0.1:27017/wonderlust";

main();

async function main() {
    try {
        await mongoose.connect(mongo_url);
        console.log("Connection to MongoDB was successful");
    } catch (err) {
        console.log("Database connection error:", err);
    }
}

// Root route
app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.send("Hello World!");
});

// Test route for creating a sample listing
app.get("/listing", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", {allListings});

});

app.get("/listing/new", async (req, res) =>{
    res.render("listing/new.ejs");
});

app.post("/listing/add", async (req, res) =>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listing");
});

app.get("/listing/:id", async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs", {listing});
});
app.get("/listing/:id/edit", async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/edit.ejs", {listing});
})

app.put("/listing/:id", async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listing")
});

app.delete("/listing/:id", async (req, res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listing");
});

// Start the server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
