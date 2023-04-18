import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
useEffect(() => {
  first

  return () => {
    second
  }
}, [third])

const { ProgramList, isLoading, isError, isSuccess, message } = useSelector(
  (state) => state.auth
)
export default function ChoosingScreen() {
  return (
    <View>
      <Text>ChoosingScreen</Text>
    </View>
  )
}