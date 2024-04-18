import React from "react";

const ShipsList = ({ ships, title }) => {
    if (!ships.length) {
        return <h3>No Ships Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {ships.map((ship) => (
                    <div key={ship._id} className="col-12 col-xl-6">
                        <div className="card mb-3">
                            <h4 className="card-header bg-dark text-light p-2 m-0">
                                {ship.Model} <br />
                                <span className="text-white" style={{ fontSize: '1rem' }}>
                                    {ship.Ship},
                                    {ship.Model}
                  </span>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShipsList;
