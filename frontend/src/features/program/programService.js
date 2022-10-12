import axios from 'axios' 

const API_URL='/api/program'
const getCurrentProgram= async ()=>{
    
    // get current program
     const response = await axios.get(API_URL)
    
     if(response.data){
        localStorage.setItem('program',JSON.stringify(response.data))
     }
}

const programService={
    getCurrentProgram,
 }

 export default programService