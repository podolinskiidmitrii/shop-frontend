import { PropsWithChildren } from 'react'
import { extendTheme, CssBaseline, CssVarsProvider } from '@mui/joy'
import { AppGlobalStyles } from './global'

export const shopTheme = extendTheme({})

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <CssBaseline />
      {AppGlobalStyles}
      <CssVarsProvider theme={shopTheme}>{children}</CssVarsProvider>
    </>
  )
}
