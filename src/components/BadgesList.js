import React, { Component } from 'react';
import { FaTwitterSquare } from 'react-icons/fa';

import './styles/BadgesList.css';

class BadgesList extends Component {
    render() {
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
