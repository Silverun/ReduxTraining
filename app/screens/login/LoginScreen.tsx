import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {styles} from './LoginScreen.styles';
import useRootStore from '../../context/useStore';
import {observer} from 'mobx-react-lite';

const LoginScreen = observer(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Working options, preserved "this" context

  // const rootStore = useRootStore();
  // const login = useRootStore().auth.login.bind(rootStore.auth);

  //Option below, function loses "this" context after of destructuring and MobX can't track changes
  //Fixes above or use autoBind: true - option in class State constructor
  const login = useRootStore().auth.login;

  const handleLogin = () => {
    const user = {name, email, password};

    login(user);
    // rootStore.auth.login(user);
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
});

export default LoginScreen;
