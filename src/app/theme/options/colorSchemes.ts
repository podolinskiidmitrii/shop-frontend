import { ColorSystemOptions } from '@mui/joy/styles/extendTheme'
import { DefaultColorScheme, ExtendedColorScheme } from '@mui/joy/styles/types'

export const colorSchemes: Partial<
  Record<DefaultColorScheme | ExtendedColorScheme, ColorSystemOptions>
> = {
  light: {
    palette: {
      primary: {
        '50': '#f0fdfa',
        '100': '#ccfbf1',
        '200': '#99f6e4',
        '300': '#5eead4',
        '400': '#2dd4bf',
        '500': '#14b8a6',
        '600': '#0d9488',
        '700': '#0f766e',
        '800': '#115e59',
        '900': '#134e4a',
      },
      background: {
        body: 'var(--joy-palette-primary-50)',
      },
    },
  },
  dark: {
    palette: {
      primary: {
        '50': '#f0fdfa',
        '100': '#ccfbf1',
        '200': '#99f6e4',
        '300': '#5eead4',
        '400': '#2dd4bf',
        '500': '#14b8a6',
        '600': '#0d9488',
        '700': '#0f766e',
        '800': '#115e59',
        '900': '#134e4a',
      },
      background: {},
    },
  },
}
