import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				<Route path="/" component={App} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signout" component={SignOut} />
				<Route path="/forums" component={Forums} />
			</div>
		</Router>
	</Provider>
	document.getElementById('root')
);