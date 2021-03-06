import React, { Component } from 'react';
import './styles/Badge.css';

import 'bootstrap/dist/css/bootstrap.css';
import confLog from '../images/badge-header.svg';

class Badge extends Component {
	render() {
		return (
			<div className='Badge'>
				<div className='Badge__header'>
					<img src={confLog} alt='Conference Logo' />
				</div>

				<div className='Badge__section-name'>
					<img
						className='Badge__avatar'
						src={this.props.avatarUrl}
						alt='Avatar image'
					/>
					<h1>
						{this.props.firstName} <br />
						{this.props.lastName}
					</h1>
				</div>

				<div className='Badge__section-info'>
					<h3 className='text-center'>{this.props.jobTitle}</h3>
					<div>@{this.props.twitter}</div>
				</div>

				<div className='Badge__footer'>#platziConf</div>
			</div>
		);
	}
}

export default Badge;
