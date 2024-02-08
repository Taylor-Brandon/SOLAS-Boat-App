import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';  




function Profile({ firstName, lastName }) {
    return(
        <div>
            <h1>Welcome {firstName} {lastName}</h1>
            <Link className='searchLink' to='/home'>Home</Link>
            <Link className='logOut' to='/'>Logout</Link>
            <Navigation />
            
        </div>
    
    )
}

export default Profile;