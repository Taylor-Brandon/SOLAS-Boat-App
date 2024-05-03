import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";

const UserList = () => {
    const { loading, error, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

   

    if (error) return <h1>Error: {error.message}</h1>
    return(
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading. . .</div>
                    ) : (
                        <div>
                            <h3 className="text-primary">Here is the current roster of profiles</h3>
                            <div className="flex-row justify-space-betweeen my-4">
                            {users.map((user) => (
    <div key={user._id} className="col-12 col-xl-6">
        <div className="card mb-3">
            <h4 className="card-header p-2 m-0">
                {user.firstName} {user.lastName} <br />
                <span className="text-black" style={{ fontSize: '1rem'}}>
                    Admin: {user.admin.toString()}, 
                    Email: {user.email}
                </span>
            </h4>
        </div>
    </div>
))}


                            </div>
                            <Link to="/addUser">Add User</Link>
                            <Link to="/profile">Profile</Link>
                            <Link to="/editUser">Edit User</Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default UserList;