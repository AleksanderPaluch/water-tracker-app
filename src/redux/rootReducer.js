import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import { userReducer } from './user/slice';
import { waterReducer } from './water/slice';




const rootReducer = combineReducers({
auth: authReducer,
user: userReducer,
// water: waterReducer
})


export default rootReducer;