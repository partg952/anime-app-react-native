import React from 'react'
import { useParams } from 'react-router'
import axios from 'react-native-axios';
import { useEffect,useState } from 'react';
import styled from 'styled-components/native';
import { Image,Text,View,Button,ActivityIndicator,ScrollView,Platform,Pressable,TextInput } from 'react-native';
import {WebView} from 'react-native-webview'
import { Dimensions } from 'react-native';
export default function Info() {
    const { id } = useParams();
    const [url,setUrl] = useState('');
    console.log(url);
    const [info,setInfo] = useState();
    const windowHeight = Dimensions.get('window').height
    useEffect(()=>{
        axios('https://anime5311.herokuapp.com/api/details/'+id)
        .then(res=>{
            console.log(res.data.results[0]);
            setInfo(res.data.results[0])
        })
        return(
            console.log("re rendered")
        )
    },[id])
    function changeSize(small,large){
        if(Platform.OS == 'android' || Platform.OS == 'ios'){
            return small
        }
        else{
            return large
        }
    }
    const Poster = styled.Image`
        border-radius: 6px;
        height: 300px;
        width: 200px;
        margin: 50px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    `
    const Loading = styled.View`
        margin-top: 100px;

    `
    const UpperContainer = styled.View`
    display: flex;
    flex-direction:${changeSize('column','row')};
    align-items: center;
    justify-content: space-around;
    color: white;
    `
    const MainContainer = styled.ScrollView`
        width: 100%;
        height: ${windowHeight};
        background-color: #313030;
    `
    const Overview = styled.Text`
        color: white;
        font-size: 20px;
    `
    const Title = styled.Text`
        font-size: 30px;
        color: white;
        margin-left: auto;
        margin-right:auto;
    `
    const Textbox = styled.View`
        width:${changeSize(80,60)+'%'};
    `
    const EpContainer = styled.View`
        width: 100%;
        margin-top: 20px;
    `
    const Episodes = styled.Pressable`
        color: white;
        width: 90%;
        margin: 10px;
        font-size: ${20};
        background-color: black;
        border-radius:6;
        padding: 5px;
    `
    const ButtonContent = styled.Text`
        color: white;
        font-size: 20px;
    `
    return (
        <MainContainer>
        
            {
                url.length!=0 && (Platform.OS =='android' ||Platform.OS == 'ios' || Platform.OS == 'windows' || Platform.OS == 'macos')   &&
                <View style={{width:'100%',height:260,marginTop:100}}>
                    <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo
                    source={{uri: url}} 
                    />
                </View>
            }
        
            
        
        
        {
            info!=undefined ?
            <>
            <UpperContainer>
              <Poster source={{uri:info.image}}/>
              <Textbox>
                <Title>{info.title}</Title>
                <Overview>{info.summary}</Overview>
              </Textbox>
            </UpperContainer>
            <EpContainer>
                {
                    [...Array(parseInt(info.totalepisode))].map((x,i)=>{
                        return(
                           <Episodes onPress={()=>{
                               axios(`https://anime5311.herokuapp.com/api/watching/${id}/${i+1}`)
                               .then(res=>{
                                   console.log(res.data);
                                   if(Platform.OS == 'android' || Platform.OS == 'ios' || Platform.OS == 'windows' || Platform.OS == 'macos'){
                                       setUrl("https:"+res.data.link)
                                    }
                                    else{
                                        window.location.href = "https:"+res.data.link
                                    }
                               })
                           }}>
                            <ButtonContent>EP:{i+1}</ButtonContent>
                           </Episodes>
                        )
                    })
                }
            </EpContainer>
              </>
            :
            <Loading>
                <ActivityIndicator size="large"  color="#00ff00"/>
            </Loading>
        }
        </MainContainer>
        )
}


