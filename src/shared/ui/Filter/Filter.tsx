import { Checkbox, List, ListItem, Typography } from '@mui/joy'
import { useState } from 'react'

export interface FilterProps {
  items: FilterItem[]
  count?: number
}

export interface FilterItem {
  id: string
  name: string
  value: boolean
  onClick: () => void
}

export const Filter = ({ items = [], count = 4 }: FilterProps) => {
  const [showAll, setShowAll] = useState(false)
  const toggleShow = () => setShowAll((prev) => !prev)

  return (
    <List>
      {items
        .filter((el, index) => index < count || showAll)
        .map(({ id, name, value, onClick }) => (
          <ListItem sx={{ minBlockSize: '10px' }} key={id} onClick={onClick}>
            <Checkbox overlay checked={value} />
            <Typography level="body2" sx={{ ml: '10px' }}>
              {name}
            </Typography>
          </ListItem>
        ))}
      {items.length > 4 && (
        <Typography
          level="body3"
          sx={{ cursor: 'pointer', ml: '10px' }}
          onClick={toggleShow}
        >
          {showAll ? 'Скрыть' : 'Показать все'}
        </Typography>
      )}
    </List>
  )
}
