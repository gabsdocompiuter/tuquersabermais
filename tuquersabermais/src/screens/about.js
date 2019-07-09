import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Sobre extends Component {

    constructor(props){
        super(props);
        this.state = {
            logoSize: '20',
        };
    }

    render(){
        return(
            <View style={styles.container}>
               
               <Image style={styles.logo}
                source={require('../assets/img2.png')}
              />

            <View>
              <Text style={styles.titulo}>Wagner Gadea Lorenz</Text>
              
              <Text style={styles.descricao}>Professor do Curso de Sistemas de Informação da ULBRA - Campus Cachoeira do Sul. 
                  Engenheiro de Computação pela 
                  Universidade Federal do Rio Grande - 
                  FURG, Brasil (2011). Mestre em Ciência da Computação pela 
                  Universidade Federal de Santa Maria (UFSM), na linha de 
                  pesquisa de Computação Aplicada (2014). 
                  Licenciado em Programa Especial de Graduação de
                   Formação de Professores para a Educação Profissional,
                    também pela UFSM (2014). Tem experiência na área de 
                    Engenharia de Software e Mineração de Dados.</Text>
            </View>

        


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#575757',
        flexGrow: 1
    },

    logo: {
        resizeMode: 'center',
        height: 200,
        width: 200,
        borderRadius: 200/2
    },

    titulo: {
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold'
        
    },

    descricao: {
        color: '#FFFFFF',
        textAlign: 'justify',
        marginTop: 20,
        padding: 25
        
    }

    
});