import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForums } from '../actions';

class Forums extends Component {
	componentDidMount() {
		this.props.getForums();
	}

	render() {
		return(
			<ul>
				{this.props.forums.map((forum, i) => {
					<li key={i}>{forum.category}</li>
				})}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		forums: state.forums,
	};
};

export default connect(mapStateToProps, { getForums })(Forums);
