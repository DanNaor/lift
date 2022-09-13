const express = require("express")
const router = express.Router()
const {
    getHistoryProgram,
    postHistoryProgram,
    putHistoryProgram,
    deleteHistoryProgram
} =  require('../controlers/programHistoryController')



router.route('/').get(getHistoryProgram).post(postHistoryProgram)
router.route('/:id').put(putHistoryProgram).delete(deleteHistoryProgram)

module.exports = router