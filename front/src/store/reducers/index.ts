import { combineReducers } from 'redux'
import OfferReducer from './OfferReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
  offer: OfferReducer,
  user: UserReducer,
})

export default rootReducer