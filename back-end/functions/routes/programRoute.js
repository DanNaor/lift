const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/verifyTokenMiddleware");
const {
    getProgram,
    postProgram,
    putProgram,
    deleteProgram
} =  require('../controlers/programController');



router.route('/')
  .get(verifyToken, getProgram)
  .post(verifyToken, postProgram);
  
router.route('/:id')
  .put(verifyToken, putProgram)
  .delete(verifyToken, deleteProgram);


module.exports = router