import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Sobre extends Component {

    constructor(props){
        super(props);
        this.state = {
            logoSize: '20',
        };
    }

    render(){
        return(
            <View style={styles.container}>
               <Text>Sobre</Text>
               <Image
                source={require('../assets/logo.png')}
              />







            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#575757'
    },

    logo: {
        resizeMode: 'center',
    },
});