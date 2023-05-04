// authService.js
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuthInStorage = async (authData) => {
  try {
    await AsyncStorage.setItem("authData", JSON.stringify(authData));
  } catch (error) {
    console.log("Error setting authData in AsyncStorage: ", error);
  }
};

export const getAuthFromStorage = async () => {
  try {
    const authData = await AsyncStorage.getItem("authData");
    return authData ? JSON.parse(authData) : null;
  } catch (error) {
    console.log("Error getting auth data from AsyncStorage: ", error);
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem("authData");
  } catch (error) {
    console.log("Error clearing auth data from AsyncStorage: ", error);
  }
};
