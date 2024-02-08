import React from 'react';
import { Link } from 'react-router-dom';



function Profile({ firstName, lastName }) {
    console.log('Received props:', firstName, lastName);
    return(
        <div>
            <h1>Welcome {firstName} {lastName} !</h1>
    <Link className='logLink' to="/">Logout</Link>
    <Link className='searchLink' to="/home">Search</Link>
    
    </div>
    );
}

export default Profile;