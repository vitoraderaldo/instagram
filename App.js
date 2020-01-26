import React from 'react';
import {  
  View  
} from 'react-native';

import {Feed} from './src/screens/Feed';

let comments = [
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'},
  {nickname:'user',comment:'oi'}
]

const App: () => React$Node = () => {
  return (
    <View style={[{flex:1}]}>
      <Feed />
    </View>
  );
};



export default App;
