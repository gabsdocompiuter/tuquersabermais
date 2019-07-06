import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView
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
            <ScrollView>
            <View style={styles.container}>
            
                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>

                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>


                    </View>
                </View>


                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>


                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>


                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>

                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>

                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>

                <View style={styles.caixavideo}>
                    <View style={styles.caixavideoimagem}>
                        <Image style={styles.imagemVideo} source={require('../assets/Koala.jpg')} />
                    </View>
                    
                    <View style={styles.resumovideo}>
                        <Text style={styles.titulovideo}>Resumo Redes de Computadores</Text>
                        <Text style={styles.descricaovideo}>Resumo Redes de Computadores</Text>

                

                    </View>
                </View>


            </View>
            </ScrollView>
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
    caixavideo: {
        height: 125,
        backgroundColor: "#000",
        marginLeft:10,
        marginRight:10,
        borderRadius: 8,
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    caixavideoimagem: {
        width: 150
    },
    imagemVideo: {
        width: 140,
        height:105,
        marginTop:10,
        marginLeft:10
    },
    resumovideo: {
        width: 230,
    },

    titulovideo: {
        color: "#fff",
        fontSize: 15,
        fontWeight:"bold",
        width: 140,
        marginTop:10,
        marginLeft:10
    },
    descricaovideo: {
        fontSize: 15,
        marginLeft:10,
        color: "#fff"
    },
});