/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,  StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}¬~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const navigation = useNavigation();
  const onRegisterPressed = () => {
    navigation.navigate('confirmEmail');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Welcome to BioSafe</Text>

      <CustomInput 
      name="username" 
      control= {control}
      placeholder="Username"
      rules={{rewuired: 'Username is required', minLength: {value: 5, message: 'Username should be at least 5 characters long',
      },
      maxLength: {
        value: 24,
        message: 'Username should be at max 24 characters long',
      }
      }}
      />
      <CustomInput 
      name="email"
      control= {control}
      placeholder="Email"
      rules={{ required: 'Email is required',pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},}}
      />
      <CustomInput 
      name = "password" 
      control={control}
      placeholder="Password" 
      secureTextEntry={true}
      rules={{ required: 'Password is required', 
      minLength: {
        value: 8,
        message: 'Password should be atleast 8 characters long',
      },
      }}
      />

      <CustomInput 
        name="password-repeat" 
        placeholder="Repeat Password"
        control={control} 
        secureTextEntry={true}
        rules={{
          validate: value => value === pwd || 'Passwords do not match', 
        }}
      />

      <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)}/>
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress = {onPrivacyPressed}>Privacy Policy</Text></Text>
      <CustomButton text="Already have an account? Sign In" onPress={onSignInPressed} type="TERTIARY" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#021c30',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#093F31'
  },
});

export default SignUpScreen;
