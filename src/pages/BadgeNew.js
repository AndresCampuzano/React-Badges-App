import React, { Component } from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className='BadgeNew__hero'>
                    <img
                        className='image-fluid'
                        src={header}
                        alt='Logo header'
                    />
                </div>

                <div className='container'>
                    <div className='row'>
                        {/* Bagde */}
                        <div className='col-6'>
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl='https://www.gravatar.com/userimage/104927907/a13b414d73c239ac7ec47d152d20f27c.jpeg'
                            />
                        </div>
                        {/* Bagde Form */}
                        <div className='col-6'>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
