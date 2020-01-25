import React,{Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/logo.png'
import logo from '../../assets/imgs/logo-escrita.png'

export class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Image source={logo} style={styles.logo} />                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'        
    },
    rowContainer:{
        flexDirection: "row",
        alignItems: 'center'
    },
    image:{        
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    logo:{        
        resizeMode: 'contain',
        marginTop: 6,
        height: 30
    }   
})