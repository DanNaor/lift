const asyncHandler = require('express-async-handler');
const admin = require('firebase-admin');

const verifyToken = asyncHandler(async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).send('Authorization header missing');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(authorizationHeader);
    req.user = decodedToken;
    console.log("req.user-",req.user)
    next();
  } catch (err) {
    console.log("encountered error while trying to verify token -",err)
    res.status(401).send(err);
  }
  // req.user = {
  //   "UserID": "1234",
  //   "email": "johndoe@gmail.com",
  //   "name": "john doe",
  //   "phoneNumber":"050696969"
  // };
  // next();
});

module.exports = verifyToken;
