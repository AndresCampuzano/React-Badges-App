import React, { Component } from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img
                        className='image-fluid'
                        src={header}
                        alt='Logo header'
                    />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Badge
                                firstName='Andrés'
                                lastName='Campuzano'
                                avatar='https://www.gravatar.com/userimage/104927907/a13b414d73c239ac7ec47d152d20f27c.jpeg'
                                jobTitle='Frontend Developer, Student'
                                twitter='campuzanoCOL'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
