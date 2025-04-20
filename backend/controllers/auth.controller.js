import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    skills,
    bio,
    subscriptions,
    profilePicture,
  } = req.body;

  try {
    // check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Hashed password
    const hashedPassword = await bcryptjs.hash(password, 10);

    //create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      skills,
      lastLogin: new Date(),
      bio,
      subscriptions,
      profilePicture,
    });

    //save user
    await user.save();

    //jwt token
    generateTokenAndSetCookie(res, user._id);

    //send response
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if user exists
    const user = await User.findOne({ email });

    //check if password is correct
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid credentials", success: false });
    }

    //check if password is correct
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "Invalid credentials", success: false });
    }

    //jwt token
    generateTokenAndSetCookie(res, user._id);

    //send response
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "User logged out successfully" });
};
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    return res.status(200).json({ user, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
