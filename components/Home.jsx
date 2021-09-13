import React from 'react'
import Card from './Card.jsx';
import { FlatGrid } from 'react-native-super-grid';
import {Text,View,StyleSheet} from 'react-native';
import axios from 'react-native-axios';
import {useEffect,useState} from 'react';
function Home() {
    const [data,setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        for(let i=1;i<=5;i++){
            axios('https://anime5311.herokuapp.com/api/popular/'+i)
            .then(body=>{
                console.log(body.data.results);
                body.data.results.forEach(items=>{
                    setData(prev=>[...prev,items])
                })
            })
        }
    },[])
    return (
        <div>
            <FlatGrid
                itemDimension={200}
                data={data}
                renderItem={(items)=>{
                    return(
                        <View style={styles.container}>
                            <Card title={items.item.title} image_url={items.item.image} id={items.item.id} />
                        </View>
                    )
                }}
            />
        </div>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Home
