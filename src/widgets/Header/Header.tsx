import { Container, Stack, Typography } from '@mui/joy'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import LoginIcon from '@mui/icons-material/Login'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import GppGoodIcon from '@mui/icons-material/GppGood'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import * as S from './style'

export function Header() {
  return (
    <Stack>
      <S.TopPanel variant="plain" color="primary">
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <S.Menu>
              <S.MenuItem>Link 1</S.MenuItem>
              <S.MenuItem>Link 2</S.MenuItem>
              <S.MenuItem>Link 3</S.MenuItem>
            </S.Menu>

            <S.RightMenu>
              <S.SocialMedia>
                <InstagramIcon />
                <InstagramIcon />
                <InstagramIcon />
              </S.SocialMedia>
              <S.LoginBox>
                <Typography>Кабинет</Typography>
                <LoginIcon />
              </S.LoginBox>
            </S.RightMenu>
          </Stack>
        </Container>
      </S.TopPanel>

      <S.MainPanel variant="plain" color="primary">
        <Container>
          <Stack gap="20px" direction="row" justifyContent="space-between">
            <img
              width="280px"
              src="https://malinaparty.ru/wp-content/uploads/2022/06/malinalogo.svg"
            />

            <S.CompanyInfo>
              <S.AdvantageItem>
                <GppGoodIcon />
                <Typography>Гарантия полёта 5 дней</Typography>
              </S.AdvantageItem>
              <S.AdvantageItem>
                <RocketLaunchIcon />
                <Typography>Доставка сегодня</Typography>
              </S.AdvantageItem>
              <S.AdvantageItem>
                <ThumbUpIcon />
                <Typography>Высокое качество</Typography>
              </S.AdvantageItem>
            </S.CompanyInfo>

            <S.Contacts>
              <Typography level="h4" startDecorator={<PhoneIcon />}>
                +7(999)123-45-67
              </Typography>
              <Typography level="body2">Заказать обратный звонок</Typography>
            </S.Contacts>

            <S.CartBox></S.CartBox>
          </Stack>
        </Container>
      </S.MainPanel>
    </Stack>
  )
}
