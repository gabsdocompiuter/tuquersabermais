import React, { Component } from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class VideoPreview extends Component {
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.onPress(this.props.data.url)}
            >
                <View style={styles.caixaVideo}>
                    <View style={styles.caixaVideoImagem}>
                        <Image style={styles.imagemVideo} source={{uri: this.props.data.thumbnail}} />
                    </View>
                        
                    <View style={styles.resumoVideo}>
                        <Text style={styles.tituloVideo}>{this.props.data.title}</Text>
                        <Text style={styles.descricaoVideo}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    caixaVideo: {
        height: 125,
        backgroundColor: "#000",
        marginLeft:10,
        marginRight:10,
        borderRadius: 8,
        marginBottom: 10,
        flexWrap: 'wrap'
    },

    caixaVideoImagem: {
        width: 150
    },

    imagemVideo: {
        width: 140,
        height:105,
        marginTop:10,
        marginLeft:10
    },

    resumoVideo: {
        width: 230,
    },

    tituloVideo: {
        color: "#fff",
        fontSize: 15,
        fontWeight:"bold",
        width: 140,
        marginTop:10,
        marginLeft:10
    },

    descricaoVideo: {
        fontSize: 15,
        marginLeft:10,
        color: "#fff"
    },
});