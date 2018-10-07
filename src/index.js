/* @flow */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import * as React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { AppNavigation } from './routing'
import { theme } from './styles'

class App extends React.Component<{}, {}> {
  componentDidMount() {
    StatusBar.setBarStyle('dark-content')
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  })

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={this.styles.container}>
          <AppNavigation />
        </View>
      </PaperProvider>
    )
  }
}

export default App
