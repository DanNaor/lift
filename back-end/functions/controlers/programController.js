const asyncHandler =require("express-async-handler")
const Program =require('../models/programModel')

//@desc get all programs by UID
//@route GET /api/program
const getProgram =asyncHandler(async(req,res) => {
    const UID = req.user; 
    const CollectionEmpty = await Program.count()
    if(CollectionEmpty){
        // const responseData= await Program.find()
        res.status(200).json(await Program.find({ UID: UID }))
    }
    else{
        res.status(200).json({message:'no data'})
    }
})

//@desc post a program
//@route POST /api/program
const postProgram =asyncHandler(async(req,res) => 
{
    const UID = req.user; 
    console.log('UID-',UID)
         for (let i = 0; i < req.body.exercises.length; i++) {
            const exercise = req.body.exercises[i];
            if (!exercise.name || !exercise.sets || !exercise.reps || !exercise.weight || !exercise.rest_time_in_Sec) {
              res.status(400).json({message:`Invalid exercise object at index ${i}`})

            }
          }
        if(!req.body.type||!req.body.time){
            res.status(400).json({message:`no a valid request`})
        }
        let body = req.body
        const program = await Program.create({
            UID:UID,
            type:body.type,
            time:body.time,
            exercises:body.exercises
        })
        res.status(200).json({message:`created program,  type- ${req.body.type}`})}
     
)

//@desc put a program by program's id not UID !
//@route PUT /api/program:id
const putProgram =asyncHandler(async(req,res) => {
    const UID = req.user.uid; 
    const program = await Program.findById(req.params.id)

    if(!program){
        res.status(400)
        throw new Error("program not found")
    }
    const updatedProgram= await Program.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json({message:`updated program- ${req.params.id}`})
})

//@desc delete a program
//@route DELETE /api/program:id
const deleteProgram =asyncHandler(async(req,res) => {
    const program = await Program.findById(req.params.id)

    if(!program){
        res.status(400)
        throw new Error("program not found")
    }

    const updatedProgram= await Program.findById(req.params.id)
    await program.remove()

    res.status(200).json({message:`DELETED program-${req.params.id} with type-${req.params.type}`})
})

 module.exports={
    getProgram,
    postProgram,
    putProgram,
    deleteProgram,
 }