import React from 'react'
import {Provider} from 'react-redux'
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from './src/App'

import storeConfig from './src/store/StoreConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://instagram-d9d82.firebaseio.com/'


const store = storeConfig()
const Redux = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => Redux)