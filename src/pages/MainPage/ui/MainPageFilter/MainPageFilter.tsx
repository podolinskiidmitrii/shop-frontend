import { ReasonFilter, ReasonsKeys } from '@/features/reasonFilter'
import { RecipientFilter, RecipientsKeys } from '@/features/recipientFilter'
import { Sheet } from '@mui/joy'

import { useDispatch, useSelector } from 'react-redux'

import {
  getReasonsFilters,
  getRecipientFilters,
} from '../../model/selectors/filterSelectors'
import { mainPageActions } from '../../model/slices/MainPageSlice'

export function MainPageFilter() {
  const reasons = useSelector(getReasonsFilters)
  const recipients = useSelector(getRecipientFilters)

  const dispatch = useDispatch()

  const toggleReasonFilter = (reason: ReasonsKeys) => {
    dispatch(mainPageActions.toggleReasonFilter(reason))
  }

  const toggleRecipientFilter = (recipient: RecipientsKeys) => {
    dispatch(mainPageActions.toggleRecipientFilter(recipient))
  }

  return (
    <Sheet
      sx={{
        my: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <ReasonFilter reasons={reasons} onChange={toggleReasonFilter} />
      <RecipientFilter
        recipients={recipients}
        onChange={toggleRecipientFilter}
      />
    </Sheet>
  )
}
