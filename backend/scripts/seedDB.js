const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/foodtruck"
);

const truckSeed = [
    {
        truckname: "Taco Man",
        image: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=563&q=80",
        foodkeywords: ["taco", "tacos", "mexican"],
        otherphotos: ["https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80","https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80","https://images.unsplash.com/photo-1545092724-ebd263517948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"],
        location: ""
    },
    {
        truckname: "Sushi Man",
        image: "https://images.unsplash.com/photo-1589273429273-633bbf47a407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        foodkeywords: ["taco", "mexican"],
        otherphotos: [],
        location: ""
    },
    {
        truckname: "Pizza Man",
        image: "https://images.unsplash.com/photo-1551888797-e7d1f43d28c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "location": "",
        foodkeywords: ["pizza", "calzone"],
        otherphotos: [],
    },
    {
        truckname: "Burger Man",
        image: "https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        location: "",
        foodkeywords: ["burgers", "fries", "keto"],
        otherphotos: [],
    },
    {
        "truckname": "Elote Man",
        image: "https://images.unsplash.com/photo-1531950110602-9c09c9102fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        "location": "",
        foodkeywords: ["street corn", "elote", "aguas frescas", "mexican"],
        otherphotos: [],
    },
    {
        truckname: "Burrito Man",
        image: "https://images.unsplash.com/photo-1592422301197-39e67a71bc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        location: "",
        foodkeywords: ["burrito", "mexican"],
        otherphotos: [],
    },
    {
        truckname: "Pasta Man",
        image: "https://images.unsplash.com/photo-1547567497-fa0a1720f457?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        location: "",
        foodkeywords: ["pasta", "italian"],
        otherphotos: [],
    }
]

db.Truck
    .remove({})
    .then(()=> db.Truck.collection.insertMany(truckSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });