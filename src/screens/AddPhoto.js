import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addPost} from '../store/actions/Posts'
import {
    View,
    Text,
    StyleSheet,        
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'

import ImagePicker from 'react-native-image-picker'

const noUser = 'Você precisa estar logado para adicionar imagens'

class AddPhoto extends Component{
    state = {
        image: null,
        comment: ''
    }

    componentDidUpdate = prevProps => {	
        if (prevProps.loading && !this.props.loading) {	
            this.setState({	
                image: null,	
                comment: ''	
            })	
            this.props.navigation.navigate('Feed')	
        }	
    }	


    pickImage = () => {

        if(!this.props.name){
            Alert.alert("Falha",noUser)
            return
        }
        let config = {
            title:'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }

        ImagePicker.showImagePicker(config, res => {
            if(!res.didCancel){
                this.setState({
                    image:{
                        uri:res.uri,
                        base64:res.data
                    }
                })
            }
        })    
    }

    save = async () => {
        if(!this.props.name){
            Alert.alert("Falha",noUser)
            return
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })                
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput editable={this.props.name != null} onChangeText={(comment) => this.setState({comment})} placeholder='Algum comentário para a foto' style={styles.input} value={this.state.comment}/>
                    <TouchableOpacity disabled={this.props.loading} onPress={this.save} style={[styles.buttom,this.props.loading ? styles.buttomDisabled : null]}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize:20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * (3/4),
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (3/4),
        resizeMode: 'center'
    },
    buttom:{
        marginTop: 10,
        padding:10,
        backgroundColor: '#4286F4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    buttomDisabled: {
        backgroundColor: '#AAA'
    }
})

const mapStateToProps = ({user, posts}) => {
    return{
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto)