import React,{Component} from 'react'
import {StyleSheet,FlatList,View} from 'react-native'

import {Header} from '../components/Header'
import {Post} from '../components/Post'

export class Feed extends Component{
    state = {
        posts:[
            {
                id:Math.random(),
                nickname:"Rafael",
                email:"rafa",                
                image: require('../../assets/imgs/gate.jpg'),
                comments: [
                    {
                        nickname:"John",
                        comment:"Top Demais"
                    },
                    {
                        nickname: "Braia",
                        comment: "run run"
                    }
                ]
            },
            {
                id:Math.random(),
                nickname:"Vitor",
                email:"vitor",
                image: require('../../assets/imgs/fence.jpg'),
                comments: []
            }
        ]
    }
    render(){
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={ ({item}) =>
                        <Post {...item} />
                    }
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
})