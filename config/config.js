require("dotenv").config();


const dev = {
    app: {
        port : process.env.PORT || 4000,
    },
    db: {
        url: process.env.BD_URL || "mongodb://localhost:27017/userDemoDB",
    },
};

module.exports = dev;