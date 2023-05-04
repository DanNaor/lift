const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/verifyTokenMiddleware");
const {
    getHistoryProgram,
    postHistoryProgram,
    putHistoryProgram,
    deleteHistoryProgram
} =  require('../controlers/programHistoryController');



router.route('/')
  .get(verifyToken, getHistoryProgram)
  .post(verifyToken, postHistoryProgram);
  
router.route('/:id')
  .put(verifyToken, putHistoryProgram)
  .delete(verifyToken, deleteHistoryProgram);


module.exports = router