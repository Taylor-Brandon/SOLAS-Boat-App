import React from "react";
import { Link } from "react-router-dom";
import Search from '../components/search/search';
import { useQuery } from "@apollo/client";
import { QUERY_SHIPS } from "../utils/queries";

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_SHIPS);
    const ships = data?.ships || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    <Link className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-3" to="/login">Logout</Link>
                    <Link className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-3" to="/profile">Profile</Link>
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
