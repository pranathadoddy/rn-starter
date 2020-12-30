import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentScreen =()=>{
    const name='Doddy';

    return  (
        <View>
            <Text style={styles.textStyle}>Component Screen This</Text>
            <Text style={styles.subHeaderStyle}>Hi my  name is {name}</Text>
        </View>);
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentScreen;