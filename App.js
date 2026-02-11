import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Invoice from './Screens/Invoice';
import TrafficRules from './Screens/TrafficRules';
import AppHeader from './components/AppHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    TrafficRules: { screen: TrafficRules },
    Invoice: { screen: Invoice },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'TrafficRules') {
          return (
            <Image source={require('./assets/trafficRulesLogo.png')}
            style={{ width: 60, height: 50 }}
            />
          );
        } else if (routeName === 'Invoice') {
          return (
            <Image source={require('./assets/invoiceLogo.png')}
            style={{ width: 80, height: 60 }}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);
