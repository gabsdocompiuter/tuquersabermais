import { createStackNavigator, createAppContainer } from 'react-navigation';

import Start from './start';
import PlayVideo from './playVideo';

const AppNavigator = createStackNavigator({
    Start: {
        screen: Start
    },
    
    PlayVideo: {
        screen: PlayVideo
    },
    
}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);