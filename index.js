const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./server/routes/auth");


const PORT = process.env.PORT | 3001;

const app = express();

app.use(express.json()); 
app.use(authRouter);

const DB = "mongodb+srv://ranaayush0730:CVcu9UVH2NoaWEVx@cluster0.cm5rqnz.mongodb.net/?retryWrites=true&w=majority";

app.post('/', (req, res) => {
    return res.status(200).send('hello');
})

mongoose
.connect(DB)
.then(() => {
    console.log("connected successfully");
})
.catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});