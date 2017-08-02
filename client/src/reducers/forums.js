import { 
	GET_FORUMS,
	SET_ACTIVE_FORUM,
} from '../actions';

export default (forums = [], action) => {
	switch (action.type) {
		case GET_FORUMS:
			return action.payload;
		case SET_ACTIVE_FORUM:
			return action.payload;
		default:
			return forums;
	}	
};