const asyncHandler =require("express-async-handler")

//@desc get a program
//@route GET /api/program
const getProgram =asyncHandler(async(req,res) => {
    res.status(200).json({message:'all program- xyz'})
})

//@desc post a program
//@route POST /api/program
const postProgram =asyncHandler(async(req,res) => 
{
    if(!req.body.type||!req.body.time||!req.body.exercises){
        res.status(400)
        throw new Error(`not a valid req`)
    }
    let body = req.body
    res.status(200).json({message:`created program,  type- ${req.body.type}`})
})

//@desc put a program
//@route PUT /api/program:id
const putProgram =asyncHandler(async(req,res) => {
    const program = "xyz"

    if(!program){
        res.status(400)
        throw new Error("program not found")
    }

    // update program- 

    res.status(200).json({message:`updated program- ${req.params.id}`})
})

//@desc delete a program
//@route DELETE /api/program:id
const deleteProgram =asyncHandler(async(req,res) => {
    const program = "xyz"

    if(!program){
        res.status(400)
        throw new Error("program not found")
    }

    // remove program
    
    res.status(200).json({message:`DELETED program-${req.params.id} with type-${req.params.type}`})
})

 module.exports={
    getProgram,
    postProgram,
    putProgram,
    deleteProgram,
 }