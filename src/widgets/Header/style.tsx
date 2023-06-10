import { Sheet, Stack, styled } from '@mui/joy'

export const TopPanel = styled(Sheet)({
  paddingY: '5px',
  borderBottom: '1px solid rgb(219, 219, 219, 0.17);',
})

export const Menu = styled(Stack)({
  flexDirection: 'row',
  alignContent: 'center',
})

export const MenuItem = styled('div')({
  padding: '5px 10px',
  cursor: 'pointer',
})

export const RightMenu = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '60px',
})

export const SocialMedia = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '15px',
})

export const LoginBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
})

export const MainPanel = styled(Sheet)({
  padding: '20px 0',
  boxShadow: '2px 2px 4px 0px rgba(34, 60, 80, 0.2)',
})

export const Contacts = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10px',
})

export const CompanyInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  px: '10px',
  gap: '5px',
})

export const AdvantageItem = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '5px',
})

export const CartBox = styled('div')({
  width: '250px',
  border: '1px solid #eee',
})
