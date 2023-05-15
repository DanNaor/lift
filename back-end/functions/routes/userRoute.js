const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/verifyTokenMiddleware");
const {
    getUser,
    createUser,
    deleteUser
} =  require('../controlers/userController');



router.route('/')
  .get(verifyToken, getUser)
  .post(verifyToken, createUser)
  .delete(verifyToken,deleteUser)
// router.route('/:id')
//   .put(verifyToken, putProgram)
//   .delete(verifyToken, deleteProgram);


module.exports = router