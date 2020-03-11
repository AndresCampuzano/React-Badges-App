import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>404: Not Found</h1>
            <Link to='/' className='btn btn-primary'>
                Back to main
            </Link>
        </div>
    );
}

export default NotFound;
