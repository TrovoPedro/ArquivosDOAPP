import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const TokenPost = () => {
  const [value, onChangeText] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [count, setCount] = React.useState('');
  const onPress = () => setCount(prevCount => prevCount);

  function handleSubmit(event){
    event.preventDefault(); 

    console.log({
      username,
      password
    });
    
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password
  }),
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(json => {
    console.log(json);
    return json;
  })
}
  return (
    <View>

      <TextInput
      id='usuario'
        placeholder="Usuario"
        onChange={({target}) => setUsername(target.value)}
        value={username}
        style={{padding: 10}}
      />
      <Text>{username}</Text>
     
      <TextInput
      id='password'
        placeholder="senha"
        secureTextEntry={true}
        onChange={({target}) => setPassword(target.value)}
        value={password}
        style={{padding: 10}}
      />
      <Text>{password}</Text>
      <TouchableOpacity  onPress={handleSubmit}>
        <Text>Press Here</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default TokenPost;