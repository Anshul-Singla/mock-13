const mongoose  = require("mongoose");
// mongoose.set("strictQuery", false);

const dbconnect = mongoose.connect("mongodb+srv://mock:13@cluster0.i4cxq01.mongodb.net/jobapp")
.then(()=> console.log('connected to DB'))

module.exports = dbconnect