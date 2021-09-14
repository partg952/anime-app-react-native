import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {useState,useRef} from 'react';
import { useMediaQuery } from 'react-responsive'


export default function Card({title,image_url,id}) {
    const query = useMediaQuery({maxWidth:'420px'})
    const cardRef = useRef();
    
    return (
        <View style={styles.card} ref={cardRef}>  
            <Image source={{uri:image_url}}  resizeMode={'cover'} style={styles.poster}  />
            <Text  numberOfLines={1} style={styles.animeTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',
        backgroundColor:'#1d1c1c',
        height:'290px',
        width:'190px',
        padding: '10px',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        position: 'relative',
        borderRadius:'6px',
        overflow: 'hidden',
        color:'white'
    },
    animeTitle:{
        position: 'absolute',
        bottom: '10px',
        width:'150px',
        fontSize:'16px',
        fontWeight:'700',
        color:'white'
    },
    poster:{
        height:'85%',
        width: '100%',
        position: 'absolute',
        top: '0'
    }
})

