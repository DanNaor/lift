import  React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, getCurrentProgram } from '../features/program/programSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'


function ChoosingPage() {
const [formData, setFormData] = useState({
  type: '',
  time: '',
  exercises:null
})

const { type, time,exercises } = formData
const navigate = useNavigate()
const dispatch = useDispatch()

const { program, isLoading, isError, isSuccess, message } = useSelector(
  (state) => state.program
)
console.log(program)
useEffect(() => {
    if (isError) {      
      toast.error(message)
    }

    if (isSuccess||program) {
        console.log(program)
    }

    dispatch(reset())
  }, [program, isError, isSuccess, message, navigate, dispatch])
  if (isLoading) {
    return <Spinner/>
  }

    return (
      <div>
        <text >hello this is ChoosingPage</text>
      </div>
        );
}

export default ChoosingPage;