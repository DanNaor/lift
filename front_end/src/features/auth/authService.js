import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuthInStorage = async (token) => {
  try {
    await AsyncStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    console.log("Error setting token in AsyncStorage: ", error);
  }
};

export const getTokenInStorage = async () => {
  try {
    const Token = await AsyncStorage.getItem("token");
    console.log("token =",Token)
    return Token;
  } catch (error) {
    console.log("Error getting token from AsyncStorage: ", error);
  }
};
export const clearAsyncStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error(error);
  }
}
// export const Init = () => {
//   return async dispatch => {
//     let token = await AsyncStorage.getItem('token');
//     if (token !== null) {
//       console.log('token fetched');
//       dispatch({
//         type: 'LOGIN',
//         payload: token,
//       })
//     }
//   }
// }
