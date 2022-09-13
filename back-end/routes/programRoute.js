const express = require("express")
const router = express.Router()
const {
    getProgram,
    postProgram,
    putProgram,
    deleteProgram
} =  require('../controlers/programController')



router.route('/').get(getProgram).post(postProgram)
router.route('/:id').put(putProgram).delete(deleteProgram)

module.exports = router