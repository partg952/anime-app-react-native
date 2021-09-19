import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native';
import {useState,useRef} from 'react';
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components/native';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Card({title,image_url,id}) {
    const query = useMediaQuery({maxWidth:'460px'})
    const cardRef = useRef();
    const history = useHistory();
    let cardWidth = 200
    if(query){
        cardWidth = 250;
    }
    const CardBody = styled.View`
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color:#1d1c1c;
        height:300px;
        width:${cardWidth}px;
        text-align:center;
        align-items:center;
        justify-content:center;
        position: relative;
        border-radius:6px;
        overflow: hidden;
        color:white;
    `
    const Title = styled.Text`
        position: absolute;
        bottom: 10px;
        width:150px;
        font-size:16px;
        font-weight:700;
        color:white;
    `
    const Poster = styled.Image`
        height:85%;
        width: 100%;
        position: absolute;
        top: 0;
        
    `
    return (
        <TouchableOpacity onPress={()=>{
            history.push('/info/'+id)
        }}>
            <CardBody>  
                <Poster source={{uri:image_url}}  resizeMode={'cover'}   />
                <Title  numberOfLines={1} >{title}</Title>
            </CardBody>
        </TouchableOpacity>
        )
}



