/* @flow */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton, withTheme } from 'react-native-paper'

type Props = {
  mode: any,
  dark: boolean,
  loading: boolean,
  style: any,
  onPress: any,
  disabled: boolean,
  children: any,
}

const Button = (props: Props) => {
  const styles = StyleSheet.create({
    buttonStyle: {},
  })

  return (
    <PaperButton
      raised
      mode={props.mode}
      dark={props.dark}
      loading={props.loading}
      style={[styles.buttonStyle, props.style]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
    </PaperButton>
  )
}

const exp = withTheme(Button)
export { exp as Button }
