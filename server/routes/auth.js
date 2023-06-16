const authRouter = require("express").Router();
const User = require("../models/user");

authRouter.post("/api/signup", async (req, res) => {
    try {
        const {name, email, profilePic} = req.body;
        console.log(name, email, profilePic);
         
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

