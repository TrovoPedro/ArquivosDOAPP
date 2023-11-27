import React from 'react'
import { View } from 'react-native'
import { useRoutes } from 'react-router'
import TokenPost from './api/endpoints/TokenPost'

const App = () => {
  return (
    <View>
      <TokenPost></TokenPost>
    </View>
  )
}

export default App