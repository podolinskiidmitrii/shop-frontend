import { Filter } from '@/shared/ui'
import { FilterItem } from '@/shared/ui'
import { Box, Typography } from '@mui/joy'
import {
  Reasons,
  ReasonsFilter,
  ReasonsKeys,
} from '../model/types/reasonFilterTypes'

interface ReasonFilterProps {
  reasons: ReasonsFilter
  onChange: (reason: ReasonsKeys) => void
}

export function ReasonFilter(props: ReasonFilterProps) {
  const { reasons, onChange } = props

  const items: FilterItem[] = Object.entries(reasons).map(([key, value]) => ({
    id: key,
    name: Reasons[key as ReasonsKeys],
    value,
    onClick: () => onChange(key as ReasonsKeys),
  }))

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
        Событие
      </Typography>
      <Filter items={items} />
    </Box>
  )
}
