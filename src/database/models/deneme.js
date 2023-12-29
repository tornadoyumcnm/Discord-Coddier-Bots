const {model, Schema, Types} = require("mongoose")

module.exports = model("deneme", new Schema(
    {
        guild: String,
    }
))