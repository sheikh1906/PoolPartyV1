/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PoolListScreen from './src/pools/PoolListScreen';
import ProfileScreen from './src/account/ProfileSreen';
import TicketListScreen from './src/tickets/TicketListScreen';
import TicketAddEditScreen from './src/tickets/TicketAddEditScreen';

const AddTab = createStackNavigator(
  {
    Add: { screen: TicketAddEditScreen }
  },
  {

  }
);

const HomeTab = createStackNavigator(
  {
    Home: { screen: TicketListScreen }
  },
  {

  }
);

const PoolsTab = createStackNavigator(
  {
    Pools: { screen: PoolListScreen }
  },
  {

  }
);

const SettingsTab = createStackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  {

  }
);

const App = createBottomTabNavigator(
  {
    Add: AddTab,
    Home: HomeTab,
    Pools: PoolsTab,
    Settings: SettingsTab
  },
  {

  }
);

export default createAppContainer(App);
