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
                style={styles.container}
            >
                <View style={styles.caixaVideo}>
                    <Image style={styles.imagemVideo} source={{uri: this.props.data.thumbnail}} />
                        
                    <View style={styles.resumoVideo}>
                        <Text style={styles.tituloVideo}>{cutText(this.props.data.title, 45)}</Text>
                        <Text style={styles.descricaoVideo}>{cutText(this.props.data.description, 60)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

function cutText(text, size){
    if (text.length <= size){
        return text;
    }

    size = size - 3;
    if(text.substring(size - 1, size) == ' '){
        size -= 1;
    }

    let newText = text.substring(0, size - 3);
    return `${newText}...`;
}

const styles = StyleSheet.create({
    container: {
        height: 125,
        width: '90%',

        marginLeft: '5%',
    },

    caixaVideo: {
        flex: 1,

        backgroundColor: "#303030",
        borderRadius: 10,
        marginBottom: 10,
        
        flexDirection: 'row'
    },

    imagemVideo: {
        width: '30%',
        resizeMode: 'center',
        marginTop: 10,
        marginLeft: 10
    },

    resumoVideo: {
        width: '60%',
        justifyContent: 'center',

        marginLeft: 10,
    },

    tituloVideo: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
    },

    descricaoVideo: {
        fontSize: 13,
        color: "#fff",

        flexDirection: 'row',
        flexWrap: "wrap"
    },
});