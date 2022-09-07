//@desc get a program
//@route GET /api/program
const getProgram =(req,res) => {
    res.status(200).json({message:'GET program'})
}

//@desc post a program
//@route POST /api/program
const postProgram =(req,res) => {
    res.status(200).json({message:'POST program'})
}

//@desc put a program
//@route PUT /api/program:id
const putProgram =(req,res) => {
    res.status(200).json({message:`PUT program${req.params.id}`})
}

//@desc delete a program
//@route DELETE /api/program:id
const deleteProgram =(req,res) => {
    res.status(200).json({message:`DELETE program${req.params.id}`})
}

 module.exports={
    getProgram,
    postProgram,
    putProgram,
    deleteProgram,
 }