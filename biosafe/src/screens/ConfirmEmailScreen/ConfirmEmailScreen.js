/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,  StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const onConfirmPressed = (data) => {
    console.warn(data);
    navigation.navigate('HomeScreen');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.warn('onResendPressed');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Confirm your Email</Text>

      <CustomInput 
        name="code" 
        control={control} 
        placeholder="Enter your Confirmation Code" 
        rules = {{
          required: 'Confirmation code is required',
        }}
        />
      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>
      <CustomButton text="Resend Code" onPress={onResendPressed} type="SECONDARY" />
      <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY" />
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
    color: '#000000',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#093F31',
  },
});

export default ConfirmEmailScreen;
