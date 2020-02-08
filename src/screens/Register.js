import React,{Component} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/User'

class Register extends Component{

    state = {
        name:'',
        email:'',
        password:''
    }
    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState({
                name:'',
                email:'',
                password:''
            })
            this.props.navigation.navigate("Profile")
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput                     
                    placeholder='Nome'
                    onChangeText={(name) => this.setState({name})}
                    style={styles.input}
                    value={this.state.name}                
                />
                <TextInput 
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={(email) => this.setState({email})}
                    style={styles.input}
                    value={this.state.email}                
                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder='Senha'
                    onChangeText={(password) => this.setState({password})}
                    style={styles.input}
                    value={this.state.password}                
                />

                <TouchableOpacity onPress={() => {this.props.onCreateUser(this.state)}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>

            </View>
        )
    }     
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',    
        justifyContent: 'center'    
    },
    input:{
        backgroundColor: '#EEE',
        borderColor: '#333',
        borderWidth: 1,
        width: '90%',
        marginTop: 20,
        height: 40,
        paddingLeft: 15
    },
    buttom:{
        backgroundColor: '#4286f4',
        padding: 10,
        marginTop: 30
    },
    buttomText: {
        color:'#FFF',
        fontSize: 20
    }
})

const mapStateToProps = ({user}) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
//export default Register