import { createStackNavigator } from 'react-navigation'
import { createNavigationOptions } from './utils'

import About from '../../pages/about'

const HOME_ROUTE = 'About.Home'

export const AboutStack = createStackNavigator(
  {
    [HOME_ROUTE]: {
      screen: About,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    },
  },
  {
    initialRouteName: HOME_ROUTE,
  },
)
