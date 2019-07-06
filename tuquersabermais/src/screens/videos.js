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
                    <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    


                    <View>
                        <Text style={styles.titulo}>Resumo Redes de Computadores</Text>



                    </View>



                </View>


                <View style={styles.video}>
                    <Text>Resumo Redes de Computadores</Text>
                </View>
           

                <View style={styles.video}>
                    <Text>Resumo Redes de Computadores</Text>
                </View>
           
                <View style={styles.video}>
                    <Text>Resumo Redes de Computadores</Text>
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
        height: 125,
        backgroundColor: "#000",
        marginLeft:10,
        marginRight:10,
        borderRadius: 8,
        marginBottom: 10
    },
    imagemVideo: {
        width: 140,
        height:105,
        marginTop:10,
        marginLeft:10
    },
    titulo: {
        color: "#fff",
        width: 140,
        height:105,
        marginTop:10,
        marginLeft:10
    },
});