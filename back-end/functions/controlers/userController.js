const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')
const mongoose = require("mongoose")

//@desc user data by UID
//@route GET /api/user
const getUser = asyncHandler(async (req, res) => {
  const { UserID} = req.user;
  const userCollectionName = `users_${UserID}`;
  const userCollection =  mongoose.connection.db.collection(userCollectionName);
  if (!userCollection) {
    return res.status(404).json({ message: 'User not found' });
  }
  const userData = await userCollection.find({}).toArray();
  res.json(userData);
})

//@desc post a new user
//@route GET /api/user
const createUser = asyncHandler(async(req,res)=> {
  const { UserID, email, name, phoneNumber } = req.user;
  console.log(UserID, email, name, phoneNumber)
  const userCollectionName = `users_${UserID.toString()}`;
  const existingUser = checkUserCollectionExists(userCollectionName)
  if (existingUser) {
    res.status(409).json({ message: 'User already exists' });
  } else {
    const CreatedUser = await User.create({
      UserID: UserID,
      email: email,
      name: name,
      phoneNumber: phoneNumber
    })
    res.status(201).json({ message: `User-${UserID} created` });
  }
  // res.status(201).json({ message: `hi` });
});


const checkUserCollectionExists = async (userId) => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const userCollectionName = `users_${userId}`;

  return collections.some((collection) => collection.name === userCollectionName);
};


module.exports = {
  createUser,
  getUser,
}