import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import {Gravatar} from 'react-native-gravatar'


export class Profile extends Component{

    logout = () => {
        Alert.alert("logout","logout")
    }

    render(){
        const options = {email:'teste@teste.com.br',secure: true}
        return (
            <View style={styles.container}>
                <Gravatar style={styles.avatar} options={options} />
                <Text style={styles.nickname}>Fulano de tal</Text>
                <Text style={styles.email}>Email</Text>
                <TouchableOpacity onPress={this.logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',        
    },
    avatar:{
        width: 110,
        height: 110,
        borderRadius: 75,
        marginTop: 10
    },
    nickname:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email:{
        marginTop: 20,
        fontSize: 25
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    }
})