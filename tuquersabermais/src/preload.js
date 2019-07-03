import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class Preload extends Component {

    constructor(props){
        super(props);

        setTimeout(() => {
            this.props.navigation.navigate('Index');
        }, 1500);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo.png')}
                    style={styles.logo}
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
        width: '50%',
    },
});