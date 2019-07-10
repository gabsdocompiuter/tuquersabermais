import { createStackNavigator, createAppContainer } from 'react-navigation';

import Preload from './preload';
import Index from './screens/';

const AppNavigator = createStackNavigator({
    // Preload: {
    //     screen: Preload
    // },
    
    Index: {
        screen: Index
    },
    
}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);