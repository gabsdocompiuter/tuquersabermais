import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import ViewPager from "@react-native-community/viewpager";

import Videos from './videos';
import Sobre from './about';


const screens = [
    {
        key: 0,
        description: 'Vídeos',
        active: true
    },

    {
        key: 1,
        description: 'Sobre',
        active: false
    },
]

export default class Start extends Component {

    constructor(props){
        super(props);

        this.state = {
            page: 0,
        }
    }

    screensTab(){
        return screens.map((tab) =>{
            return (
                <View key={tab.key}>
                    <TouchableOpacity style={styles.tabItem} onPress={() => this.changeTab(tab.key)}>
                        <Text style={styles.tab}>{tab.description}</Text>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: (this.state.page == tab.key ? '#FFF' : 'transparent')
                            }}
                        />
                    </TouchableOpacity>
                </View>    
            );
        })
    }

    changeTab(tab){
        this.viewPager.setPage(tab);
        this.setState({page : tab});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')}
                    />
                    <View style={styles.desc}>
                        <Text style={styles.title}>Wagner Lorenz</Text>

                        <View style={styles.options}>
                            {this.screensTab()}
                        </View>
                    </View>
                </View>
                <ViewPager
                    style={styles.viewPager}
                    initialPage={0}
                    ref={viewPager => this.viewPager = viewPager}
                    onPageSelected={e => this.setState({page: e.nativeEvent.position})}
                >
                    <View key="1">
                        <Videos/>
                    </View>

                    <View key="2">
                        <Sobre/>
                    </View>
                </ViewPager>
                
                <View style={styles.footer}>
                    <Text style={styles.footerTexto}>Desenvolvido com </Text> 
                    <Icon name="heart" size={18} color="red" /> 
                    <Text style={styles.footerTexto}> por Os guri</Text>
                    
                </View>

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