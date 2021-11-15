require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT | 3002;
const db = require('./db')
const userRouter = require("./routes/userRoute")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
db.on("error", () => { console.log("error in function on db") })

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("sucsses");
})
app.use('/users', userRouter)

