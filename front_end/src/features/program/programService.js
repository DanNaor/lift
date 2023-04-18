import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from 'react-native-config';

const API_URL = Config.API_URL_Program || '/lift-8f86f/us-central1/api/program';
axios.defaults.baseURL = 'http://localhost:5001';

const getCurrentProgram = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    if (response.data) {
      await AsyncStorage.setItem('program', JSON.stringify(response.data));
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
