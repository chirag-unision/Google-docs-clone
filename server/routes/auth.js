const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("api/signup", async (req, res) => {
  console.log(req.body);
    try {
        const {name, email, profilePic} = req.body;
         
        // how to check if User already exits in our database
      let user = await User.findOne({ email });
      if(!user){
        user = new User({
            email,
            profilePic,
            name,
        });
        user = await user.save();
      }

      res.json({ user });

    } catch (e) {}
});

module.exports = authRouter;

