import React from "react";
import { Link } from "react-router-dom";
import Search from '../components/search';
import { useQuery } from "@apollo/client";
import { QUERY_SHIPS } from "../utils/queries";

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_SHIPS);
    const ships = data?.ships || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    <Link to="/login">Logout</Link>
                    <Link to="/profile">Profile</Link>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error fetching data. Please try again later.</div>
                    ) : (
                        <Search />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
