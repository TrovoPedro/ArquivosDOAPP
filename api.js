import React from 'react'
import { Text, View, TextInput } from 'react-native'
import TokenPost from './endpoints/TokenPost';
import { UserPost } from './endpoints/UserPost'

export const api = () => {

    return (
      <View>
        <Text>User Post</Text>
        <UserPost/>
        <TokenPost/>
        <Text> Token</Text>
      </View>
    );
}
