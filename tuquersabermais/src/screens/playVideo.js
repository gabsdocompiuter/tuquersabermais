import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class PlayVideo extends Component {

    constructor(props){
        super(props);
        this.state = {
        };

    }

    render(){
        return(
            <View style={styles.container}>
                
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