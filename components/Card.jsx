import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {useState} from 'react';

export default function Card({title,image_url,id}) {
    return (
        <View style={styles.card} on>  
            <Image source={{uri:image_url}}  resizeMode={'cover'} style={styles.poster}  />
        
            <Text  numberOfLines={1} style={styles.animeTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        border:'1px solid black',
        height:'290px',
        width:'190px',
        padding: '10px',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        borderRadius:'6px',
        overflow: 'hidden',
    },
    animeTitle:{
        position: 'absolute',
        bottom: '10px',
        width:'150px',
        fontSize:'16px',
        fontWeight:'700',
    },
    poster:{
        height:'85%',
        width: '100%',
        position: 'absolute',
        top: '0'
    }
})

