import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Gravatar} from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/logo.png'
import logo from '../../assets/imgs/logo-escrita.png'

class Header extends Component{
    render(){
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ?
            <Gravatar options={{email:this.props.email, secure:true}} /> : null
        return(            
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Image source={logo} style={styles.logo} />                    
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
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
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user:{
        fontSize: 10,
        color:'#888',   
        marginRight: 10     
    },
    avatar:{
        width: 30,
        height: 30,
        marginLeft: 10
    }   
})

const mapStateToProps = ({user}) => {
    return{
        email: user.email,
        name: user.email
    }
}

export default connect(mapStateToProps)(Header)

