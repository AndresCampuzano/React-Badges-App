import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HomePage.css';
import conf from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function HomePage() {
    return (
        <React.Fragment>
            <div className='container__home'>
                <div className='container__objects'>
                    <div className='container'>
                        <div className='row row-objects'>
                            <div className='col-sm-12 col-md-6'>
                                <div className='elementOne'>
                                    <img src={conf} alt='Logo' />
                                    <h2>Print your badges</h2>
                                    <p>
                                        The easiest way to manage your
                                        conference
                                    </p>
                                    <Link
                                        to='/badges'
                                        className='btn btn-primary'
                                    >
                                        Start now
                                    </Link>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <div className='elementTwo'>
                                    <img src={astronauts} alt='Logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage;
