import { GlobalStyles } from '@mui/joy'

const global = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  input: {
    margin: '0',
  },
}

export const AppGlobalStyles = <GlobalStyles styles={global} />
