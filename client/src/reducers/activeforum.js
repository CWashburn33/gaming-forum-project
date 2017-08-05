import { SET_ACTIVE_FORUM } from '../actions';

export default (state = null, action) => {
	switch (action.type) {
		case SET_ACTIVE_FORUM:
			return action.payload.data;
		default:
			return state;
	}
};