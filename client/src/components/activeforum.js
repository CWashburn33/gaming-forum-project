import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveForum } from '../actions';

class ActiveForum extends Component {
	componentDidMount() {
		this.props.setActiveForum(this.props.match.params.id);
	}

	render() {
		if (!this.props.activeForum) return (
			<h1 style={{textAlign: 'center'}}>Forum Does Not Exist</h1>
		);

		return (
			<div>
				<Link to='/'>Home</Link>
				<h1>{this.props.activeForum.category}</h1>
				<ul>
					{this.props.activeForum.map((post, i) => {
						<li key={i}>{activeForum.posts}</li>
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		activeForum: state.activeForum,
	};
};

export default connect(mapStateToProps, { setActiveForum })(ActiveForum);
