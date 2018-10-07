/* @flow */
import { Animated, Easing } from 'react-native'
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation'

// navigation stacks
import { HomeStack } from './stacks/home'
import { AboutStack } from './stacks/about'
import { PagesStack } from './stacks/pages'
import { NotAuthenticatedStack } from './stacks/not-authenticated'

// components
import Drawer from './components/drawer'

// transitionConfig fixes Drawer issues, when moving between stacks
// see https://shift.infinite.red/react-navigation-drawer-tutorial-part-2-9c382217ac6b
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
})

// docs: https://reactnavigation.org/docs/en/drawer-navigator.html
export const Authenticated = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
    },
    AboutStack: {
      screen: AboutStack,
    },
    PagesStack: {
      screen: PagesStack,
    },
  },
  {
    initialRouteName: 'HomeStack',
    contentComponent: Drawer,
    drawerPosition: 'right',
  },
)

/**
 * AppNavigation contains all navigations (stacks, tabs or drawers)
 * https://reactnavigation.org/docs/en/switch-navigator.html
 */
export const AppNavigation = createSwitchNavigator(
  {
    Authenticated: {
      screen: Authenticated,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    NotAuthenticated: {
      screen: NotAuthenticatedStack,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'NotAuthenticated',
    transitionConfig: noTransitionConfig,
  },
)
