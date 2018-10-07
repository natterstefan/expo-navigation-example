import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

import { colors } from '../../../styles'

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: colors.backgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
  },
})

const DEFINITIONS = {
  title: 'Expo Navigation',
}

// Docs
// - navigation: https://reactnavigation.org/docs/en/navigation-prop.html
// - navigationOptions: https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-for-screens-inside-of-the-navigator
export const AppHeader = ({ navigation, navigationOptions }, rootName) => () => {
  // alternative solution to find out if backButton should appear
  // https://github.com/react-navigation/react-navigation/issues/570#issuecomment-318621669
  const shouldRenderBack = navigation.state.routeName !== rootName || false

  // properties accessed from the component's static navigationOptions
  const hideBackButton = navigationOptions.hideBackButton || !shouldRenderBack || false
  const title = (navigationOptions && navigationOptions.title) || DEFINITIONS.title

  return (
    <Appbar.Header style={styles.appHeader}>
      {!hideBackButton && (
        <Appbar.BackAction icon="arrow-back" onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
    </Appbar.Header>
  )
}
