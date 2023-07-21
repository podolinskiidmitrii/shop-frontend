import { Filter } from '@/shared/ui'
import { FilterItem } from '@/shared/ui'
import { Box, Typography } from '@mui/joy'
import {
  Recipients,
  RecipientFilterType,
  RecipientsKeys,
} from '../model/types/recipientFilterTypes'

interface ReasonFilterProps {
  recipients: RecipientFilterType
  onChange: (reason: RecipientsKeys) => void
}

export function RecipientFilter(props: ReasonFilterProps) {
  const { recipients, onChange } = props

  const items: FilterItem[] = Object.entries(recipients).map(
    ([key, value]) => ({
      id: key,
      name: Recipients[key as RecipientsKeys],
      value,
      onClick: () => onChange(key as RecipientsKeys),
    }),
  )

  return (
    <Box sx={{ p: '20px 30px' }}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs2',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.neutral',
          mb: 1,
        }}
      >
        Кому
      </Typography>
      <Filter items={items} />
    </Box>
  )
}
