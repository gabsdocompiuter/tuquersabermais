import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';

import VideoPreview from '../components/videoPreview';

const endPoint = 'https://monteiro.dev/youtube-api/UC82Y_rFr8H6WZmbUKvqc8Pw';

export default class Videos extends Component {
    constructor(props){
        super(props);

        this.state = {
            lista: [],
        };

        this.loadItems();
    }

    loadItems(){
        fetch(endPoint)
            .then(r => r.json())
            .then(json => {
                let s = this.state;
                s.lista = json.videos;
                this.setState(s);
            });
    }

    openVideo(video){
        alert(video);
    }

    render(){
        return(
            <FlatList
                data={this.state.lista}
                renderItem={({item}) => 
                    <VideoPreview
                        data={item}
                        onPress={(item) => this.openVideo(item)}
                    />
                }
                keyExtractor={(item, index) => item.id}
            />
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
});