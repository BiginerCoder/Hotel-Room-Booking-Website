const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    // image: {
    //     filename: {
    //         type: String,
    //         default: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
    //     },
    //     url: {
    //         type: String,
    //         set: (v) =>
    //             v === ""
    //                 ? "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
    //                 : v,
    //         required: false
    //     }
    // },
    image: {
        filename: {
            type: String,
            default: "defaultImage.jpg" // Just a filename or leave it empty if not needed
        },
        url: {
            type: String,
            default: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
            required: false
        }
    },
    
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

// Use mongoose.model to create the model
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
