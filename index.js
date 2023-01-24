const express = require("express");
const dbconnect = require("./config/db.connect");
const cors = require("cors");
const userRouter = require('./users/user.router')
const jobsRouter = require('./jobs/jobs.router')

let port = 8080;


const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>");
});
 
// :::::::::::user Route:::::::::::::::::::
app.use('/user' , userRouter)
// :::::::::::jobs Route:::::::::::::::::::
app.use('/jobs' , jobsRouter)



app.listen(port, async () => {
  await dbconnect;
  console.log(`Listening on http://localhost:${port}`);
});
