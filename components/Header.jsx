import React from 'react'
import {View,Text,TextInput} from 'react-native';
import styled from 'styled-components/native';
function Header({data,setData}) {
    
    return (
        <View>
            <TextInput style={{
                width: 10,
                backgroundColor:'red'
            }} editable={true}/>
        </View>
    )
}

export default Header
