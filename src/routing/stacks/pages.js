import { createStackNavigator } from 'react-navigation'
import { createNavigationOptions } from './utils'

import PageA from '../../pages/page-a'
import PageB from '../../pages/page-b'
import PageC from '../../pages/page-c'

const HOME_ROUTE = 'Pages.Home'

export const PagesStack = createStackNavigator(
  {
    [HOME_ROUTE]: {
      screen: PageA,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    },
    'Pages.B': {
      screen: PageB,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    },
    'Pages.C': {
      screen: PageC,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    },
  },
  {
    initialRouteName: HOME_ROUTE,
  },
)
