// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const API_URL = process.env.REACT_APP_ANDROID_UI_API_URL
  const API_URL = 'http://10.0.2.2:5000'

  const handleRegister = async () => {
    try {
      console.log('trying post register method')
      console.log(`${API_URL}/api/auth/register`)
      await axios.post(`${API_URL}/api/auth/register`, {
        username,
        email,
        password,
      });
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default RegisterScreen;
