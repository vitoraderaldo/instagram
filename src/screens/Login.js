import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export class Login extends Component{

    state = {
        email:'',
        password:''
    }

    login = () => {
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
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
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
        height: 40
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