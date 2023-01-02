import { combineReducers } from 'redux'
import OfferReducer from './OfferReducer'

const rootReducer = combineReducers({
  offer: OfferReducer,
})

export default rootReducer