// routing components
import About from '../../../pages/about'
import PageA from '../../../pages/page-a'

/**
 * routesConfig contains a configuration for each available route
 * in the Drawer component
 */
export const routesConfig = [
  { label: 'Home', icon: 'home', key: 'Main.Home' },
  { label: 'About', icon: 'info', key: 'About.Home', component: About },
  { label: 'Page A', icon: 'info', key: 'Pages.Home', component: PageA },
]

const calcRoutes = items => {
  const routing = {}

  items.forEach(item => {
    if (item.component) {
      // TODO: provide feature to nest items
      // eg: https://medium.freecodecamp.org/how-to-build-a-nested-drawer-menu-with-react-native-a1c2fdcab6c9
      routing[item.key] = {
        component: item.component,
      }
    }
  })

  return routing
}

export const routes = calcRoutes(routesConfig)
