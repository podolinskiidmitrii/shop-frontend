import {
  Autocomplete,
  Box,
  Container,
  FormControl,
  Stack,
  styled,
  Typography,
} from '@mui/joy'
// import { ReactComponent as VKIcon } from '@/shared/assets/icons/VK_Monochrome_Compact_Logo.svg'
import SearchIcon from '@mui/icons-material/Search'
import InstagramIcon from '@mui/icons-material/Instagram'

export function Header() {
  return (
    <Stack>
      <Box sx={{ background: 'red', py: '10px' }}>
        <Container>
          <Stack gap="20px" direction="row" justifyContent="space-between">
            <img src="https://mosballoon.ru/image/catalog/logo2.svg" />

            <Box
              sx={{
                border: '1px solid blue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '10px',
              }}
            >
              <Typography level="h4">+7(999)123-45-67</Typography>
              <Typography level="body2">Заказать обратный звонок</Typography>
            </Box>
            <Box
              sx={{
                border: '1px solid blue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '10px',
              }}
            >
              <Typography>Мы в соцсетях</Typography>
              <Box>
                <InstagramIcon />
                {/* <VKIcon /> */}
              </Box>
            </Box>

            <Box
              sx={{
                minWidth: '200px',
                border: '1px solid blue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '10px',
              }}
            ></Box>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ background: 'orange', paddingY: '10px' }}>
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Menu>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuItem>Link 3</MenuItem>
            </Menu>
            <FormControl id="free-solo-demo">
              <Autocomplete
                startDecorator={<SearchIcon />}
                freeSolo
                placeholder="Поиск"
                options={['helo', 'world']}
              />
            </FormControl>
          </Stack>
        </Container>
      </Box>
    </Stack>
  )
}

const Menu = styled(Stack)({
  flexDirection: 'row',
  alignContent: 'center',
})

const MenuItem = styled('div')({
  padding: '5px 10px',
  color: 'white',
})
