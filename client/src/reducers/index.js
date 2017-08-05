import { combineReducers } from 'redux';
import ForumReducer from './forums';
import AuthReducer from './auth';
import ActiveForumReducer from './activeforum';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
	forums: ForumReducer,
	auth: AuthReducer,
	form: FormReducer,
	activeForum: ActiveForumReducer,
});

export default rootReducer;