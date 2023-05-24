import axios from 'axios';
import Config from 'react-native-config';

// const API_URL = Config.API_URL_Program || '/lift-8f86f/us-central1/api/user';
const API_URL = 'http://10.0.2.2:5001/lift-8f86f/us-central1/api/user';// axios.defaults.baseURL = 'http://localhost:5001';

const getCurrentProgram = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `${token}`,
      },
    });
    
    if (response.data) {
      console.log("got response all good")
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const programService = {
  getCurrentProgram,
};

export default programService;