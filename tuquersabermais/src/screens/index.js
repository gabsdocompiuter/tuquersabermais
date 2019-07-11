
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';


import Start from './start';
import PlayVideo from './playVideo';


const AppNavigator = createStackNavigator({
    Start: {
        screen: Start
    },
    
    PlayVideo: {
        screen: PlayVideo
    },
    
}, {
    defaultNavigationOptions: {
        header: null
    }
});



export default createAppContainer(AppNavigator); 



