import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
const logo = require('../../assets/imgs/logo.png')

export default class Splash extends Component{    

    showApp = () => {
        this.props.navigation.navigate('App')        
    }

    componentDidMount = () => {
        setTimeout(this.showApp,2000)
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.header}>Instagram</Text>
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
    image:{
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    header:{
        fontSize: 50,
        fontWeight: 'bold'
    }
})