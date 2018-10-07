import { StyleSheet } from 'react-native'
import { DefaultTheme } from 'react-native-paper'

export const colors = {
  backgroundColor: '#F0F0F0',
  primary: '#F58C75',
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.backgroundColor,
  },
  fonts: {
    regular: 'open-sans-light',
    light: 'open-sans-light',
    medium: 'open-sans-regular',
    thin: 'open-sans-light',
  },
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
