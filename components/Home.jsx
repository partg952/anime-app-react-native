import React from 'react'
import Card from './Card.jsx';
import { FlatGrid } from 'react-native-super-grid';
import {Text,View,StyleSheet,ScrollView,ActivityIndicator} from 'react-native';
import axios from 'react-native-axios';
import {useEffect,useState} from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
export default function Home({data,setData}) {
    console.log(data);
    const windowHeight = Dimensions.get('window').height;
    useEffect(()=>{
        setData([])
        let num = 1
        async function getData(i){
            const body = await axios('https://anime5311.herokuapp.com/api/popular/'+i)
                console.log(body.data);
                body.data.results.forEach(items=>{
                    setData(prev=>[...prev,items])
                })
        }
            getData(1)
            
        
    },[])
    const Container = styled.View`
        align-items:center;
        justify-content:center;
        margin-top: 30px;
    `
    const Parent = styled.ScrollView`
        background-color:#313030;
        height: ${windowHeight};
    `
    const Loading = styled.View`
        font-size: 30px;
        color: white;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
    `
    
    return (
        <Parent>
        {
            data.length!=0?

            <FlatGrid
            itemDimension={200}
            data={data}
            renderItem={(items)=>{
                    return(
                        <Container>
                            <Card title={items.item.title} image_url={items.item.image} id={items.item.id}/>
                        </Container>
                    )
                }}
                />
            :
            <Loading>
                <ActivityIndicator   size="large" color="#00ff00"/>
            </Loading>
            }
        </Parent>
    )
}




