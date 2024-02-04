import React from 'react';
import Home from '../components/home';

const boats = [
    {
        ship: "ABLE",
        model: "670",
        hrn: "6MRX1601"
    },
    {
        ship: "APACHE",
        model: "670",
        hrn: "6MRX1007"
    },
    {
        ship: "COMFORT PORT",
        model: "NON STD 670",
        hrn: "6MRX9004"
    }
];

    function Data() {
        return <Home boats={boats} />
    }

    export default Data;
