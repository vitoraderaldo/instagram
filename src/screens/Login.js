import React,{Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../store/actions/User'
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class Login extends Component{

    state = {
        name:'temporario',
        email:'',
        password:''
    }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('Profile')
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}                
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Senha'                    
                    secureTextEntry={true}                    
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}                
                />
                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Register")}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta</Text>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null,mapDispatchToProps)(Login)