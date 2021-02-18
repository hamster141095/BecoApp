const mongoose = require("mongoose");
require("dotenv").config();

const itemsSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    info: {
        type: String,
    },
    img: {
        type: String,
    },
    category: {
        type: String,
    },
});

const Items = mongoose.model("Items", itemsSchema);
module.exports = { Items };
