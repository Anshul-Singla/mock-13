const express = require("express");
const User = require("./user.model.js");
const jwt = require("jsonwebtoken");


const app = express.Router();


app.get('/' , (req , res) => {
    res.send("LIFE IS AWESOME... && welcome to users")
});
app.post("/register", async (req, res) => {
  const { name , email, password,} = req.body;
  console.log('req.body:', req.body)

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({ status: false, message: "User already exist!" });
  }else{
    try {
      const admin = email.includes("@masaischool.com");
      console.log('admin:', admin)
      if(admin){
        const user = await User.create({
          name,
          email,
          password ,
          role:"admin"
        });
        return res.send({ status: true, message: "ADMIN have signup Successfully" });
        
      }else{
      console.log('yes:')
      const user = await User.create({
        name,
        email,
        password ,
      });
      return res.send({ status: true, message: "USER have signup Successfully" });
    }
    
  } catch (error) {
    res.send(error)
  }}
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email , password});
  if (!user) {
    return res.send({ Token: "", message: "Wrong Credential!" });
  }else{

    
      const Token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          name:user.name
        },
        "SECRETKEY",
        { expiresIn: "2 days" }
      );
    
      return res.send({
        Token: Token,
        message: "You have signIn Successfully",
        role:user.role
      });
    
  }

});

module.exports = app;
