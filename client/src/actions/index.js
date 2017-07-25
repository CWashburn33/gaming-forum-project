import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';

export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_FORUMS = 'GET_FORUMS';

export const authError = (error) => {
	return {
		type: AUTHENTICATION_ERROR,
		payload: error,
	};
};

export const signOutUser = () => {
	localStorage.removeItem('token');
	return {
		type: USER_UNAUTHENTICATED,
	};
};

export const signIn = (email, password, history) => {
	return (dispatch) => {
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				localStorage.setItem('token', response.data.token);
				dispatch({
					type: USER_AUTHENTICATED,
				});
				history.push('/users');
			})
			.catch(() => {
				dispatch(authError('Incorrect email and/or password'));
			});
	};
};

export const signUp = (email. password, history) => {
	return (dispatch) => {
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				localStorage.setItem('token', response.data.token);
				dispatch({
					type: USER_AUTHENTICATED,
				});
				history.push('/users');
			})
			.catch(() => {
				dispatch(authError('Email or Username already taken.'));
			});
	};
};


export const getForums = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				authorization: token,
			},
		};
		const promise = axios.get(`${ROOT_URL}/forums`, config);
		promise.then(response => {
			console.log(response);
			dispatch({
				type: GET_FORUMS,
				payload: response.data,
			});
		});
	};
};






