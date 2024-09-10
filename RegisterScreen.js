// RegistrationScreen.js

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegistrationScreen = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    
    console.log('Register Button Clicked');
    
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo2.png')}  
          style={styles.logo} 
        />
      </View>
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="Name" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aeaead"
          value={Name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="PhoneNumber" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="PhoneNumber"
          placeholderTextColor="#aeaead"
          value={{PhoneNumber}}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aeaead"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={15} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aeaead"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aeaead"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text> 
      </TouchableOpacity>

      <Text style={styles.signinText}>━━━ Or Register with ━━━</Text>

      <View style={styles.socialWrapper}>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={20} color="#aeaead" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="google" size={20} color="#aeaead" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={20} color="#aeaead" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={styles.loginLinkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE6E0',
    padding: 45,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 450,  
    height: 300, 
    marginBottom: 5,
    marginTop: -80,  
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: '#aeaead',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  signinText: {
    fontSize: 13,
    marginTop: 25,
    color: '#aeaead',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#4C7766',
    borderRadius: 10,
    backgroundColor: '#EBE6E0',
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 13,
    color: '#4C7766',
  },
  socialWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '50%',
    justifyContent: 'space-between',
  },
  registerButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#4C7766',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#EBE6E0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: '#4C7766',
    textDecorationLine: 'underline',
  },
});
