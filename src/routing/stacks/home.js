import { createStackNavigator } from 'react-navigation'

import Home from '../../pages/home'
import { createNavigationOptions } from './utils'

const HOME_ROUTE = 'Main.Home'

export const HomeStack = createStackNavigator(
  {
    [HOME_ROUTE]: {
      screen: Home,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    },
  },
  {
    initialRouteName: HOME_ROUTE,
  },
)
