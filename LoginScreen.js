import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.blobContainer}>
        <Image
          source={require('./assets/blob1.png')} 
          style={styles.blob}
        />
        <Image
          source={require('./assets/logo1.png')}  
          style={styles.logo} 
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aeaead"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#4C7766" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aeaead" 
        />
      </View>
    
      <Text style={styles.rememberMe}>☐ Remember me</Text> 

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => console.log('Login Button Clicked')}>
        <Text style={styles.loginButtonText}>Login</Text> 
      </TouchableOpacity>

      <Text style={styles.signinText}>━━━ Or Signin with ━━━</Text>

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

      {/* Another button ni sya para mo adtos RegisterSCreen */}
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE6E0',
    padding: 45,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  blobContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blob: {
    width: 400,
    height: 650,
    position: 'absolute',  
    top: -420,  
    zIndex: -1,  
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
  signinText:{
    fontSize: 13,
    marginTop: 25,
    color: '#aeaead',
  },
  rememberMe:{
    marginTop: 5,
    alignSelf: 'flex-start',
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
  loginButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#4C7766',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#EBE6E0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  registerButton: {
    marginTop: 20,
    padding: 10,
  },
  registerButtonText: {
    color: '#4C7766',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
