/* @flow */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Title, withTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-navigation'
import type { Theme } from 'react-native-paper/types'

// app components
import { Button } from '../../components/button'

// styling
import { styles as mainStyles } from '../../styles'

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  cardContent: {
    margin: 20,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
})

type Props = {
  theme: Theme,
  navigation: any,
}
type State = {
  loading: boolean,
}

class Auth extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Auth',
  }

  state = {
    loading: false,
  }

  simulateLogin = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
      this.props.navigation.navigate('Authenticated')
    }, 500)
  }

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props

    return (
      <SafeAreaView style={[styles.drawerContent, { backgroundColor: background }]}>
        <View style={[mainStyles.container, { backgroundColor: background }]}>
          <Card>
            <Card.Content style={styles.cardContent}>
              <Title>LOGIN</Title>
            </Card.Content>
            <Card.Cover
              source={{
                uri: `https://unsplash.it/300/300/?random&__id=${Math.random()}`,
              }}
            />
            <Card.Content style={styles.cardContent}>
              <Paragraph>
                The Login page is part of a Switch Navigator. What does this mean, you might ask.
                Let\'s see what the offical documentation says about it:
              </Paragraph>
              <Paragraph>
                The purpose of SwitchNavigator is to only ever show one screen at a time. By
                default, it does not handle back actions and it resets routes to their default state
                when you switch away. This is the exact behavior that we want from the
                authentication flow.
              </Paragraph>
              <Button
                style={styles.button}
                dark
                mode="contained"
                onPress={this.simulateLogin}
                loading={this.state.loading}
                disabled={this.state.loading}
              >
                Login
              </Button>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    )
  }
}

export default withTheme(Auth)
