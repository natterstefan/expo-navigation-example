/* @flow */
import React from 'react'
import get from 'lodash.get'
import { StyleSheet, Platform } from 'react-native'
import { Drawer, withTheme } from 'react-native-paper'
import type { Theme } from 'react-native-paper/types'
import { NavigationScreenProp, NavigationStateRoute, SafeAreaView } from 'react-navigation'

import { routesConfig } from './routes'

type Props = {
  theme: Theme,
  navigation: NavigationScreenProp<NavigationStateRoute>,
}

type State = {
  drawerItemIndex: number,
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
})

class DrawerItems extends React.Component<Props, State> {
  state = {
    drawerItemIndex: 0,
  }

  // TODO: When not navigating with drawer, drawerItemIndex doesn't get updated
  // sadface, need to fix it
  _setDrawerItem = index => {
    this.setState({ drawerItemIndex: index }, () => this._doNavigate(index))
  }

  _doNavigate = index => {
    const routeKey = get(routesConfig, `[${index}].key`)
    if (routeKey) {
      this.props.navigation.navigate(routeKey)
    }
  }

  render() {
    const {
      theme: {
        colors: { paper },
      },
    } = this.props

    return (
      <SafeAreaView style={[styles.drawerContent, { backgroundColor: paper }]}>
        <Drawer.Section title={'Expo Navigation'} style={{ flex: 1 }}>
          {routesConfig.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              active={this.state.drawerItemIndex === index}
              onPress={() => this._setDrawerItem(index)}
            />
          ))}
        </Drawer.Section>

        <Drawer.Section>
          <Drawer.Item
            label="Logout"
            icon="input"
            onPress={() => this.props.navigation.navigate('NotAuthenticated')}
          />
        </Drawer.Section>
      </SafeAreaView>
    )
  }
}

export default withTheme(DrawerItems)
