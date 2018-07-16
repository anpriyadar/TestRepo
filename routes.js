import { Navigation } from 'react-native-navigation';
import LoginScreen from './src/screen/Login'
import RegisterationScreen from './src/screen/Registeration'
import HomeScreen from './src/screen/Home'
import SearchScreen from './src/screen/Search'
import {Provider} from 'react-redux';
import Store from './src/redux/store/store'


Navigation.registerComponent('LoginScreen', () => LoginScreen,Store,Provider)
Navigation.registerComponent('RegisterationScreen', () => RegisterationScreen, Store, Provider)
Navigation.registerComponent('HomeScreen', () => HomeScreen, Store, Provider)
Navigation.registerComponent('SearchScreen', () => SearchScreen, Store, Provider)


Navigation.startSingleScreenApp({
screen:{
    screen: 'LoginScreen',
    title:'Login',
    navigatorStyle: {
        navBarBackgroundColor: '#8CC2A0',
        topBarElevationShadowEnabled:true,
        topBarShadowColor: '#686466',
        navBarHidden:false,
        navBarTextColor:'white',
        navBarTextFontSize:20,
        largeTitle:true
    },
      navigatorButtons: {
          leftButtons: [{
              
          } ],
             rightButtons: [{
                 title: 'Register', // for a textual button, provide the button title (label)
                 animated: true,
                 buttonColor: '#361F00',
                 id: 'Register', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                 disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
                 buttonFontSize: 18, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
             }],
      },

}
})