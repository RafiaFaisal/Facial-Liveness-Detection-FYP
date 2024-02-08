/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView, Text, TextInput} from 'react-native';
import Logo from '../../../assets/images/login_app.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit, formState: {errors}} = useForm();

  console.log(errors);

  const onSignInPressed = (data) => {
    console.log(data);
    //validate user
    navigation.navigate('HomeScreen');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[StyleSheet.logo, {height: height * 0.5}]}
        resizeMode="contain"
      />

        <CustomInput name="username" placeholder="Username" control={control} rules={{ required: 'Username is required' }}/>
        <CustomInput name="password" placeholder="Password" secureTextEntry control={control} rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password should be minimum 8 characters lomg' } } }/>

      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>
      <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
      <CustomButton text="Don't have an account? Sign up" onPress={onSignUpPressed} type="TERTIARY" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '20%',
    maxWidth: 200,
    maxHeight: 100,
  },
  placeholder:{
    color: '#808080',
  }});

export default SignInScreen;
