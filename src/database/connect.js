const mongoose = require("mongoose");

module.exports = url => {
    mongoose.connect(url, {
        autoIndex: false,
    }).then(async () => {
        console.log("[MongoDB] MongoDB Launched!");
    }).catch(async (err) => {
        console.error(err);
    });
};