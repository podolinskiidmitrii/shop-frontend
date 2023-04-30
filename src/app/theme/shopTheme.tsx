import { PropsWithChildren } from 'react'
import { extendTheme, CssBaseline, CssVarsProvider } from '@mui/joy'
import { AppGlobalStyles } from './global'
import { colorSchemes } from './options/colorSchemes'

export const shopTheme = extendTheme({
  colorSchemes,
})

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <CssBaseline />
      {AppGlobalStyles}
      <CssVarsProvider theme={shopTheme}>{children}</CssVarsProvider>
    </>
  )
}
