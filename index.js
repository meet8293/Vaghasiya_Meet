const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
    "mongodb+srv://meetvaghasiya64_db_user:789641233@meet8293.31tox7j.mongodb.net/?retryWrites=true&w=majority&appName=Meet8293",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
    console.log("server is running : http://localhost:" + PORT);
});