import React,{Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet,FlatList,View} from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component{
    state = {       
    }
    render(){
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
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


const mapStateToProps = ({posts}) => {
    /* Coloca o que está no Store no Props do Componente */
    return{
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)