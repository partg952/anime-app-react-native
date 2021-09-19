import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter,Route } from 'react-router-native';
import Home from './components/Home';
import Info from './components/Info'
import Header from './components/Header';

export default function App() {
  const [data,setData] = useState([]);
  return (
    <NativeRouter>
    <Route path='/' exact>
    <Header data={data} setData={setData} />
        <Home data={data} setData={setData} />
      </Route>
      <Route path='/info/:id' exact>
      <Header data={data} setData={setData} />
        <Info/>
      </Route>
    </NativeRouter>
  );
}

