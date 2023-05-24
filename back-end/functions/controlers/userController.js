const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')
// const mongoose = require("mongoose")

//@desc user data by UID
//@route GET /api/user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ UserID: req.user.uid });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(user);
});


//@desc post a new user
//@route POST /api/user
const createUser = asyncHandler(async (req, res) => {
  const { UserID, email, name, phoneNumber } = req.user;
  // Check if user already exists
  const existingUser = await User.findOne({ UserID });
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Create new user
  const newUser = new User({
    UserID,
    email,
    name,
    phoneNumber,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ message: "added user -\n"+savedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//@desc delete a new user
//@route DELETE /api/user
const deleteUser = asyncHandler(async (req, res) => {

  try {
    const deletedUser = await User.findOneAndDelete({ UserID: req.user.UserID });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted', deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = {
  createUser,
  getUser,
  deleteUser,
}