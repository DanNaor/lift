import axios from 'axios' 

const API_URL='/api/program'
const getCurrentProgram= async ()=>{
    
    // get current program
     const response = await axios.get(API_URL)
     console.log(response)
     if(response.data){
      localStorage.setItem('program',JSON.stringify(response.data))
      return response.data
     }
}

const programService={
    getCurrentProgram,
 }

 export default programService