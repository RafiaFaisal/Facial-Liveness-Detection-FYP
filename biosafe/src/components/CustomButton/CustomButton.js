/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
        ]}>
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
            ]}>
            {text}
        </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 2,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#b2c8c5',
        fontSize: 16,
    },
    container_SECONDARY: {
        borderColor: '#b2c8c5',
        borderWidth: 2,
    },
    container_TERTIARY: {
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY: {
        color: '#b2c8c5',
    },
    text_TERTIARY: {
        color: '#10392f',
    },
});

export default CustomButton;

