const express = require("express");
const JobsModel = require('./jobs.model')
const jwt = require("jsonwebtoken");


const app = express.Router();


app.get("/", async (req, res) => {
  const jobs = await JobsModel.find();
  //   console.log(jobs);
  res.send(jobs);
});


app.post("/", async (req, res) => {
    const { name, position, contract, location } = req.body;
    const jobs = await JobsModel.create({ name, position, contract, location });
  
    res.send({message : "New Jobs created successfully" , jobs});
  });
  app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    console.log('id:', id)
    await JobsModel.findByIdAndDelete(id);
    res.send("Items has deleted successfully");
  });
  

module.exports = app;
