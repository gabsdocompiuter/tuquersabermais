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
        this.state = {
            logoSize: '20',
        };

        setInterval(() => {
            let s = this.state;
            s.logoSize++;

            this.setState(s);
        }, 30);

        setTimeout(() => {
            this.props.navigation.navigate('Index');
        }, 1500);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo.png')}
                    style={{
                        ...styles.logo,
                        width: (this.state.logoSize + '%')
                    }}
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