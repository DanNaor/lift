import { View, Text } from 'react-native'
import React ,{ Alert,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getCurrentProgram } from '../features/program/programSlice'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/base';
function ChoosingScreen() {
 
  const dispatch = useDispatch()
  const handlePress = async ()=>{
    try {
      await AsyncStorage.clear();
      console.log("cleared")
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }
  const { program, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.program
  )
  useEffect(()=>{
    dispatch(getCurrentProgram())
  },[])
  useEffect(() => {
      if (isError) {      
        Toast.show({
          type:'error',
          text1:'error'
        })
      }
  
      if (isSuccess||program) {
        Toast.show({
          type:'success',
          text1:'all good'
        })
      }
  
      // dispatch(reset())
    }, [program, isError, isSuccess, message,  dispatch])
    if (isLoading) {
      Toast.show({
        type:'info',
        text1:'loading...'
      })
    }
  
  return (
    <View>
      <Button handlePress={handlePress}>clear async </Button>
      <Text>ChoosingScreen</Text>
    </View>
  )
}
export default ChoosingScreen