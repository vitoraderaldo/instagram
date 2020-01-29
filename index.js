import React from 'react'
import {Provider} from 'react-redux'
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import Navigator from './src/Navigator'

import storeConfig from './src/store/StoreConfig'

const store = storeConfig()
const Redux = () => {
    return(
        <Provider store={store}>
            <Navigator/>
        </Provider>
    )
}

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => Redux)