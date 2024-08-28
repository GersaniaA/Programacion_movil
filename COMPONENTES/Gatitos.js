import {View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

function Gatitos(props) {
    return(
        <View>
            <Image style={styles.gato} source={props.imagen}/>
            <Text style={styles.titulo}>{props.nombre}</Text>
        </View>
    );
}

export default Gatitos;
const styles = StyleSheet.create({
    gato:{
      marginTop:10,
      borderRadius:5,
      width:300,
      height:300,
    },
    titulo:{
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
    }  

    });