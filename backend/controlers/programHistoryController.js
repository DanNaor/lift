const asyncHandler =require("express-async-handler")
const ProgramHistory =require('../models/programHistoryModel')

//@desc get a program's history
//@route GET /api/programHistory
const getHistoryProgram =asyncHandler(async(req,res) => {
    const IsCollectionEmpty = await ProgramHistory.count()
    if(IsCollectionEmpty){
        const responseData= await ProgramHistory.find() 
        res.status(200).json({responseData})
    }
    else{
        res.status(200).json({message:'no data'})
    }
})

//@desc post a program's history
//@route POST /api/programHistory
const postHistoryProgram =asyncHandler(async(req,res) => 
{
    if(!req.body.type||!req.body.time_took||!req.body.exercises||!req.body.workout_starting_time||!req.body.date){
        res.status(400)
        throw new Error(`not a valid req`)
    }
    let body = req.body
    const CreatedProgramHistory = await ProgramHistory.create({
        type:body.type,
        date:body.date,
        time_took:body.time_took,
        workout_starting_time:body.workout_starting_time,
        exercises:body.exercises

    })
    res.status(200).json({message:`created program's history, type- ${req.body.type}`})
})

//@desc put a program's history
//@route PUT /api/programHistory:id
const putHistoryProgram =asyncHandler(async(req,res) => {
    const programHistory = await ProgramHistory.findById(req.params.id)

    if(!programHistory){
        res.status(400)
        throw new Error("program's History not found")
    }

    const updatedProgram= await ProgramHistory.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json({message:`updated program's history- ${req.params.id}`})
})

//@desc delete a program's history
//@route DELETE /api/programHistory:id
const deleteHistoryProgram =asyncHandler(async(req,res) => {
    const programHistory = await ProgramHistory.findById(req.params.id)

    if(!programHistory){
        res.status(400)
        throw new Error("program not found")
    }

    await programHistory.remove()

    res.status(200).json({message:`DELETED program's history-${req.params.id} `})
})

 module.exports={
    getHistoryProgram,
    postHistoryProgram,
    putHistoryProgram,
    deleteHistoryProgram,
 }