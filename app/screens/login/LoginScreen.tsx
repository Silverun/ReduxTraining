import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {useAppDispatch} from '../../hooks/Redux';
import {authActions} from '../../store/auth/authSlice';
import {styles} from './LoginScreen.styles';
// import {StackScreenProps} from '@react-navigation/stack';
// import {RootStackParamList} from '../../Main';

// type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    const user = {name, email, password};
    dispatch(authActions.login(user));
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

export default LoginScreen;
