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

import AuthLoadingScreen from './src/login/AuthLoadingScreen';
import LoginScreen from './src/login/LoginScreen';
import SignUpScreen from './src/login/SignUpScreen';
import PoolListScreen from './src/pools/PoolListScreen';
import ProfileScreen from './src/account/ProfileSreen';
import TicketListScreen from './src/tickets/TicketListScreen';
import TicketAddEditScreen from './src/tickets/TicketAddEditScreen';

const AddTabStack = createStackNavigator(
  {
    Add: { screen: TicketAddEditScreen }
  },
  {

  }
);

const HomeTabStack = createStackNavigator(
  {
    Home: { screen: TicketListScreen }
    // Tickets for Pool
    // Tickets for User
  },
  {

  }
);

const PoolsTabStack = createStackNavigator(
  {
    Pools: { screen: PoolListScreen }
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
    Home: HomeTabStack,
    Add: AddTabStack,
    Pools: PoolsTabStack,
    Settings: SettingsTabStack
  },
  {
    initialRouteName: 'Home'
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
    initialRouteName: 'App'
  }
);

export default createAppContainer(App);
