/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AuthLoadingScreen from './src/login/AuthLoadingScreen';
import LoginScreen from './src/login/LoginScreen';
import SignUpScreen from './src/login/SignUpScreen';
import PoolListScreen from './src/pools/PoolListScreen';
import PoolAdminScreen from './src/pools/PoolAdminScreen';
import PoolDetailsSceen from './src/pools/PoolDetailsScreen';
import ProfileScreen from './src/account/ProfileSreen';
import TicketListScreen from './src/tickets/TicketListScreen';
import TicketAddEditScreen from './src/tickets/TicketAddEditScreen';

const homeIcon = <FontAwesome5 name={'home'} solid size={24} />;
const poolsIcon = <FontAwesome5 name={'users'} solid size={24} />;
const settingsIcon = <FontAwesome5 name={'cog'} solid size={24} />;

const AddTabStack = createStackNavigator(
  {
    Add: { screen: TicketAddEditScreen }
  },
  {

  }
);

const HomeTabStack = createStackNavigator(
  {
    Home: { screen: TicketListScreen },
    Add: { screen: TicketAddEditScreen }
    // Tickets for Pool
    // Tickets for User
  },
  {
    initialRouteName: 'Home'
  }
);

const PoolsTabStack = createStackNavigator(
  {
    Pools: { screen: PoolListScreen },
    Admin: { screen: PoolAdminScreen },
    Details: { screen: PoolDetailsSceen }
  },
  {

  }
);

const SettingsTabStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  {

  }
);

const LoggedInTabNav = createBottomTabNavigator(  
  {
    Home: { screen: HomeTabStack ,navigationOptions: { tabBarIcon : homeIcon }},
    Pools: { screen: PoolsTabStack, navigationOptions: { tabBarIcon: poolsIcon }},
    Settings: { screen: SettingsTabStack, navigationOptions: { tabBarIcon: settingsIcon }}
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: { showLabel: false }
  }
);

const AuthStackNav = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen }
  },
  {
    initialRouteName: 'Login'
  }
);

const App = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Login: AuthStackNav,
    App: LoggedInTabNav
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(App);
