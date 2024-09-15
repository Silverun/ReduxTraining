import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {auth} from '../../store/auth/authSlice';
import {styles} from './LoginScreen.styles';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = auth.login;

  useEffect(() => {
    console.log('login');
  }, []);

  const handleLogin = () => {
    console.log('handleLogin');
    const user = {name, email, password};
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
        onPress={() => {
          console.log('press');
          handleLogin();
        }}
      />
    </View>
  );
};

export default LoginScreen;
