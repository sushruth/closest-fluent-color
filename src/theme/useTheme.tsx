import React from 'react'
// @ts-ignore
import { ThemeContext } from 'react-fela'
import { ThemePrepared } from '@fluentui/react-northstar'

type UseThemeReturn = {
  theme: ThemePrepared
}

export const useTheme: () => UseThemeReturn = () =>
  React.useContext(ThemeContext)
