import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';

class NewForumForm extends Component {
	render() {
		return(
			<form onSubmit={this.props.handleSubmit}>
				<div>
					<label htmlFor='category'>Category</label>
					<Field name='category' component='input' type='text' />
				</div>
				<div>
					<label htmlFor='description'>Discription</label>
					<Field name='description' component='input' type='text' />
				</div>
				<button type='submit'>Submit</button>
				<Link to='/'>Cancel</Link>
			</form>
		);
	}
}

NewForumForm = reduxForm({
	form: 'new-forum',
})(NewForumForm);

export default NewForumForm;