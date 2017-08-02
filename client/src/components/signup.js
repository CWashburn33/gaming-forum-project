import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../actions';
import { connect } from 'react-redux';

class SignUp extends Component {
	handleFormSubmit({email, password}) {
		this.props.signUp(email, password, this.props.history);
	}

	renderAlert() {
		if (!this.props.error) return null;
		return (
			<h3>{this.props.error}</h3>
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset>
					<label>Email:</label>
					<Field name='email' component='input' type='text' />
				</fieldset>
				<fieldset>
					<label>Password:</label>
					<Field name='password' component='input' type='password' />
				</fieldset>
				<button action='submit'>Submit</button>
				{this.renderAlert()}
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.auth.error,
		authenticated: state.auth.authenticated,
	};
};

SignUp = connect(mapStateToProps, { signUp })(SignUp);

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'confirmPassword'],
})(SignUp);


