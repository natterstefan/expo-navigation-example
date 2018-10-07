import { createStackNavigator } from 'react-navigation'

import Auth from '../../pages/auth'

const HOME_ROUTE = 'NotAuthenticated.Home'

// docs: https://reactnavigation.org/docs/en/stack-navigator.html
export const NotAuthenticatedStack = createStackNavigator(
  {
    [HOME_ROUTE]: { screen: Auth },
  },
  {
    initialRouteName: HOME_ROUTE,
    headerMode: 'none',
  },
)
