const mongoose = require("mongoose");

const JobsSchema = mongoose.Schema({
  name: { type: String, require: true },
  position: { type: String, require: true },
  contract: { type: String, enum: ["full-time", "part-time"], default:"full-time" },
  location: { type: String },
});
const JobsModel = mongoose.model("job", JobsSchema);
module.exports = JobsModel;