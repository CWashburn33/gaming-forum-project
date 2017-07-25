import { GET_FORUMS } from '../actions';

export default (forums = [], action) => {
	switch (action.type) {
		case GET_FORUMS:
			return action.payload;
		default:
			return forums;
	}	
};