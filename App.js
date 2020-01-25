import React from 'react';
import {  
  View  
} from 'react-native';


import {Header} from './src/components/Header';
import {Post} from './src/components/Post';

let comments = [
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'}
]

const App: () => React$Node = () => {
  return (
    <View style={[{flex:1}]}>
      <Header/>     
      <Post comments={comments} image={require('./assets/imgs/gate.jpg')}/>
    </View>
  );
};



export default App;
