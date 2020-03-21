import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitterSquare } from 'react-icons/fa';

import './styles/BadgesList.css';

class BadgesList extends Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className='btn btn-primary' to='/badges/new'>
						Create new badge
					</Link>
				</div>
			);
		}
		return (
			<div className='BadgesList'>
				<ul>
					{this.props.badges.map(badge => {
						return (
							<li key={badge.id} className='BadgesListItem'>
								<div className='elementsList'>
									<div className='elementOne'>
										<img
											className='BadgesListItem__avatar'
											src={badge.avatarUrl}
											alt='Avatar image'
										/>
									</div>
									<div className='elementTwo'>
										<p className='bold-text'>
											{badge.firstName} {badge.lastName}
										</p>
										<a href='/'>
											<FaTwitterSquare />
											{badge.twitter}
										</a>
										<p>{badge.jobTitle}</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgesList;
