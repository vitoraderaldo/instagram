import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import {Register} from './screens/Register'

const authRouter = createStackNavigator({    
    Login: {screen: Login, navigationOptions: {title:'Login'}},
    Register: {screen: Register, navigationOptions: {title:'Register'}},
},{initialRouteName:'Login'})

const loginOrProfileRouter = createSwitchNavigator({    
    Profile: Profile,
    Auth: authRouter
},{initialRouteName:'Auth'})

const RouteConfigs = {
    Feed: {
        name:'Feed',
        screen: Feed,
        navigationOptions: {
            title:'Feed',
            tabBarIcon: ({tintColor}) =>  
                <Icon name='home' size={30} color={tintColor} />
            
        }
    },
    Add: {
        name:'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title:'Add Picture',
            tabBarIcon: ({tintColor}) =>  
                <Icon name='camera' size={30} color={tintColor} />
            
        }
    },
    Profile: {
        name:'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title:'Profile',
            tabBarIcon: ({tintColor}) => 
                <Icon name='user' size={30} color={tintColor} />
            
        }
    }
}

const TabNavigatorConfig = {    
    initialRouteName: 'Feed',
    tabBarOptions: {
            showLabel: false,
    }
}

const navigator = createBottomTabNavigator(RouteConfigs,TabNavigatorConfig)
const menuNavigator = createAppContainer(navigator)
export default menuNavigator