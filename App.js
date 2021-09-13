import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home';
export default function App() {
  return (
    <Router>
      <Route path='/' exact>
          <Home/>
      </Route>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
