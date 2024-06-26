// https://youtu.be/kDvZ97u2Ulg?si=2LydBLV6APo9Hko7
// npm init -y
// npm install express dotenv cors mongoose nodemon
// npm install uuid
// 
// 
const app = require("./app");
const config = require("./config/config");

// const PORT = 5000;
const PORT = config.app.port;


app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
});





