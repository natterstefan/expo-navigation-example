import { AppHeader } from '../../components/app-header'

/** Header Docs
 * - https://reactnavigation.org/docs/en/headers.html
 *
 * If one wants to access more of the component, we need to take a look at the
 * following ideas/solutions
 * - https://github.com/react-navigation/react-navigation/issues/570#issuecomment-358286583
 */
export const createNavigationOptions = (HOME_ROUTE, headerMode = 'float') => props => ({
  header: AppHeader(props, HOME_ROUTE),
  headerMode,
})

/**
 * If a stack contains more than one simple route, one can use this utility.
 * Just provide the name of the home route (eg. Program.Home) and the routes.
 *
 * routes should look similar to:
 * const routes = [
 *  {
 *    name: 'Programs.Home',
 *    screen: ExamplePrograms,
 *  },
 *  {
 *    name: 'Programs.Program',
 *    screen: ExampleProgram,
 *  },
 * ]
 */
export const createRoutes = (HOME_ROUTE, routes) => {
  const routing = {}

  routes.forEach(route => {
    routing[route.name] = {
      screen: route.screen,
      navigationOptions: createNavigationOptions(HOME_ROUTE),
    }
  })

  return routing
}
