import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
  console.log("Login");
};

export const signup = async (req, res) => {
  try {
    const { fullName, userName, confirmPassword, gender, password } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      userName,
      gender,
      password: hashedPassword,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  console.log("Login");
};
