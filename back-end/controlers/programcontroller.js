const asyncHandler =require("express-async-handler")
//@desc get a program
//@route GET /api/program
const getProgram =asyncHandler(async(req,res) => {
    res.status(200).json({message:'GET program'})
})

//@desc post a program
//@route POST /api/program
const postProgram =asyncHandler(async(req,res) => 
{
    if(!req.body.text){
        res.status(400)
        throw new Error("add key field please")
    }
    res.status(200).json({message:`POST program`})
})

//@desc put a program
//@route PUT /api/program:id
const putProgram =asyncHandler(async(req,res) => {
    res.status(200).json({message:`PUT program${req.params.id}`})
})

//@desc delete a program
//@route DELETE /api/program:id
const deleteProgram =asyncHandler(async(req,res) => {
    res.status(200).json({message:`DELETE program${req.params.id}`})
})

 module.exports={
    getProgram,
    postProgram,
    putProgram,
    deleteProgram,
 }