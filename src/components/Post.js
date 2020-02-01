import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'

import {connect} from 'react-redux'
import {Author} from '../components/Author'
import {Comments} from '../components/Comments'
import AddComment from '../components/AddComment'


class Post extends Component{
    render(){
        const addComment = this.props.name ?
            <AddComment postId={this.props.id}/> : null
        return(
            <View style={styles.container}>
                <Author email={this.props.email} nickname={this.props.nickname}/>
                <Image source={this.props.image} style={styles.image}/>                       
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    image:{        
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * (3/4),
        /*resizeMode: 'contain',       */
    },
   
})

const mapStateToProps = ({user}) => {
    return{
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)

