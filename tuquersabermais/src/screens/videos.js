import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class Videos extends Component {

    constructor(props){
        super(props);
        this.state = {
            logoSize: '20',
        };
    }

    render(){
        return(
            <View style={styles.container}>
            


                <View style={styles.video}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    
                    <Text>teste</Text>




                </View>
                <View style={styles.video}>
                    <Text>teste</Text>
                </View>
           



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    video: {
        height: 150,
        backgroundColor: "#000",
        marginLeft:10,
        marginRight:10,
        borderRadius: 8,
        marginBottom: 10
    },
    


    logo: {
        resizeMode: 'center',
    },
});