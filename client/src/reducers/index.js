import { combineReducers } from 'redux';
import ForumReducer from './forums';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
	forums: ForumReducer,
	auth: AuthReducer,
});

export default rootReducer;