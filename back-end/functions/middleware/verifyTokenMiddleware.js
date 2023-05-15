const asyncHandler = require('express-async-handler');
const admin = require('firebase-admin');

const verifyToken = asyncHandler(async (req, res, next) => {
  // const authorizationHeader = req.headers.authorization;
  // if (!authorizationHeader) {
  //   return res.status(401).send('Authorization header missing');
  // }

  // console.log(authorizationHeader);

  // try {
  //   const decodedToken = await admin.auth().verifyIdToken(authorizationHeader);
  //   req.user = decodedToken;
  //   next();
  // } catch (err) {
  //   res.status(401).send(err);
  // }
  req.user = {
    "UserID": "1234",
    "email": "johndoe@gmail.com",
    "displayName": "john doe",
  };
  next();
});

module.exports = verifyToken;
