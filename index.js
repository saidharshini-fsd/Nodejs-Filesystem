const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3500;

app.get("/", (req, res) => {
    let time = new Date();

    // Customize the date and time format
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    let formattedDate = time.toLocaleString('en-US', options);

    let content = `Current timeStamp is ${formattedDate}`;

    try {
        fs.writeFileSync("./date-time.txt", content);
        console.log("File Written Successfully");
    } catch (err) {
        console.error(err);
    }

    res.sendFile(__dirname + "/date-time.txt");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
