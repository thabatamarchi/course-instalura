import React, { useState } from 'react';
import { 
  Text,
  TextInput,
  Button, 
  View
} from 'react-native';

import style from './style';
import runLogin from '../../Services/login';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageErro, setMessageErro] = useState('');

  const tryLogin = async () => {
    try {
      const token = await runLogin(username,password);
      await AsyncStorage.setItem('instalura_token', token);
      navigation.replace('Feed', {name: username});
    } catch(err){
      setMessageErro("err.message", err.message);
    }
  }

  return (
    <>
      <View style={style.container}>
        <TextInput
          style={style.inputs}
          placeholder="Usuario"
          onChangeText={texto => setUsername(texto)}
        />
        <TextInput
          style={style.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={texto => setPassword(texto)}
        />
        <Text>{messageErro}</Text>
      </View>
      <View style={style.buttonView}>
        <Button title="Entrar" onPress={tryLogin}/>
      </View>
    </>  
  );
};

export default Login;
