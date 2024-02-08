/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,  StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const onSubmitPressed = () => {
    console.warn(data);
    navigation.navigate('HomeScreen');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>Reset your Password</Text>

      <CustomInput placeholder="Code" name="code" control={control} rules={{required: 'Code is required'}}/>
        <CustomInput placeholder="Enter your New Password" name="password" control={control} secureTextEntry rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be atleast 8 characters long',
          },
        }} />
      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>
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

export default NewPasswordScreen;
