import { combineReducers } from 'redux';
import ForumReducer from './ForumReducer';
import ActiveForumReducer from './ActiveForumReducer';
import AuthReducer from './Auth';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
	forums: ForumReducer,
	activeForum: ActiveForumReducer,
	auth: AuthReducer,
});

export default rootReducer;