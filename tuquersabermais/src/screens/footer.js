
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class Footer extends Component {
    constructor(props){
        super(props);
        }
    render(){
        return(
            <View style={styles.container}>
                

                <View style={styles.footer}>
                    <Text style={styles.footerTexto}>Desenvolvido com </Text> 
                    <Icon name="heart" size={18} color="red" /> 
                    <Text style={styles.footerTexto}> por Os guri</Text>
                    
                </View>

                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#575757'
    },

    header: {
        margin: 10,
        alignSelf: 'center',

        flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 100,
    },
    viewPager: {
        flex: 1
      },

    desc: {
        marginLeft: 15,

        alignItems: 'center',
    },

    title: {
        color: '#FFF',
        fontFamily: 'sans-serif-light',
        fontSize: 30,
    },

    options: {
        flexDirection: 'row',
    },

    tabLines: {
        flexDirection: 'row',
    },

    tabItem: {
        marginRight: 7,
    },

    tab: {
        color: '#FFF',
        fontFamily: 'sans-serif-light',
        fontSize: 22,
    },

    viewPager: {
        flex: 1,
    },

    footer: {
        
        alignSelf: 'flex-end',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: 'center'
        
    },

    footerTexto: {
        color: '#FFFFFF'
    }
});