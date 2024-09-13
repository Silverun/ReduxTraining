import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {styles} from './LoginScreen.styles';
import useRootStore from '../../context/useStore';
import {AuthSliceInstance} from '../../store/auth/auth';
import {observer} from 'mobx-react-lite';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useRootStore().auth.login;
  // const login = AuthSliceInstance.login;

  useEffect(() => {
    console.log('Login function:', login);
  }, [login]);

  const handleLogin = () => {
    const user = {name, email, password};
    console.log('Login button pressed, with user:', user);
    login(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        disabled={name && email && password ? false : true}
        onPress={handleLogin}
      />
    </View>
  );
};

export default observer(LoginScreen);
