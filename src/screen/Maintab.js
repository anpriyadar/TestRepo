import {
    Navigation
} from 'react-native-navigation';


const startMainTab = () => {
  Navigation.startTabBasedApp({
      tabs: [{
              label: 'Home',
              screen: 'HomeScreen',
               title: 'Home',
               icon: require('../assets/icons8-home-48.png')

          },
          {
              label: 'Search Screen',
              screen: 'SearchScreen',
               title: 'Search',
               icon: require('../assets/icons8-home-48.png')

          },
          {
              label: 'Search Screen',
              screen: 'SearchScreen',
              title: 'Search',
              icon: require('../assets/icons8-home-48.png')

          },
          {
              label: 'Search Screen',
              screen: 'SearchScreen',
              title: 'Search',
              icon: require('../assets/icons8-home-48.png')

          },
          
      ],
       tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
           tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
           tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
           initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
       },
       
  })
}

export default startMainTab;

