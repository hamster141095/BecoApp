const express = require("express");
let router = express.Router();

const { Items } = require("../../models/cardModel");

router.route("/add").post(async (req, res) => {
    try {
        const item = new Items({
            ...req.body,
        });
        const result = await item.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            message: "Error adding article",
            error: error,
        });
    }
});

router.route("/load").post(async (req, res) => {
    try {
        let category = req.body.category;
        if (category === "catalog") {
            const items = await Items.find();
            res.status(200).json(items);
        } else {
            const items = await Items.find({
                category: category,
            });
            res.status(200).json(items);
        }
    } catch (error) {
        res.status(400).json({ message: "Error fetching articles", error });
    }
});

router.route("/search").post(async (req, res) => {
    try {
        if (req.body.category === "catalog") {
            const items = await Items.find({
                title: { $regex: req.body.reqKey },
            });
            res.status(200).json(items);
        } else {
            const items = await Items.find({
                title: { $regex: req.body.reqKey },
                category: req.body.category,
            });
            res.status(200).json(items);
        }
    } catch (error) {
        res.status(400).json({ message: "Error fetching articles", error });
    }
});

module.exports = router;
