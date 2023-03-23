import axios from 'axios'
import { AsyncStorage } from 'react-native';
const API_URL = '/api/program'
const getCurrentProgram = async () => {

    // get current program
    const response = await axios.get(API_URL)
    console.log(response)
    if (response.data) {
        await AsyncStorage.setItem('program', JSON.stringify(data));
        return response.data
    }
}

const programService = {
    getCurrentProgram,
}

export default programService