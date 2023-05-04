import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("data stored")
    }
    catch (error) {
    }
    console.log("Error storing data in AsyncStorage", error);
};
export const getItemFor = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key); 
            return value;
    }
    catch (error) {
        console.log("Error getting data from AsyncStorage ", error);
    }
};