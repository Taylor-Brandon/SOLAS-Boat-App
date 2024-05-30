import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SHIPS } from "../utils/queries";
import { REMOVE_SHIP, UPDATE_SHIP } from '../utils/mutations';
import "../styles/result.css";

const ChangeShip = () => {
    const { shipId } = useParams();
    const { loading, error, data } = useQuery(QUERY_SHIPS, {
        variables: { shipId }
    });
    const [updateShip] = useMutation(UPDATE_SHIP, {
        onCompleted: (data) => {
            window.alert("Change Successful");
        },
        onError: (error) => {
            window.alert(error.message)
        }
    });
    const [removeShip] = useMutation(REMOVE_SHIP, {
        onCompleted: (data) => {
            window.alert("Ship Removed Successfully");
        },
        onError: (error) => {
            window.alert(error.message)
        }
    });
    const [ship, setShip] = useState(null);
    const [formData, setFormData] = useState({
        Ship: '',
        Model: '',
        HRN: '',
        HIN: '',
        contactNumber: '',
        annualInspectionDate: '',
        fiveYearInspectionDate: '',
        sponsonSerialNumber: '',
        SRBSerialNumber: '',
        fuelTankSerialNumber: '',
        ZAPR356C2BVMXHookSerialNumber: '',
        engineMakeModel: '',
        engineSerialNumber: '',
        gear: '',
        gearSerialNumber: '',
        jet: '',
        jetSerialNumber: '',
        POCName: '',
        POCEmail: '',
        POCPhoneNumber: '',
        Notes: '',
    });

    useEffect(() => {
        if(data && data.ships) {
            const foundShip = data.ships.find(ship => ship._id === shipId);
            setShip(foundShip);
            if (foundShip) {
                setFormData({
                    Ship: foundShip.Ship,
                    Model: foundShip.Model,
                    HRN: foundShip.HRN,
                    HIN: foundShip.HIN,
                    contactNumber: foundShip.contactNumber,
                    annualInspectionDate: foundShip.annualInspectionDate,
                    fiveYearInspectionDate: foundShip.fiveYearInspectionDate,
                    sponsonSerialNumber: foundShip.sponsonSerialNumber,
                    SRBSerialNumber: foundShip.SRBSerialNumber,
                    fuelTankSerialNumber: foundShip.fuelTankSerialNumber,
                    ZAPR356C2BVMXHookSerialNumber: foundShip.ZAPR356C2BVMXHookSerialNumber,
                    engineMakeModel: foundShip.engineMakeModel,
                    engineSerialNumber: foundShip.engineSerialNumber,
                    gear: foundShip.gear,
                    gearSerialNumber: foundShip.gearSerialNumber,
                    jet: foundShip.jet,
                    jetSerialNumber: foundShip.jetSerialNumber,
                    POCName: foundShip.POCName,
                    POCEmail: foundShip.POCEmail,
                    POCPhoneNumber: foundShip.POCPhoneNumber,
                    Notes: foundShip.Notes,
                });
            }
        }
    }, [data, shipId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateShip({ variables: { shipId, ...formData } });
    };

    const handleRemoveShip = () => {
        if (window.confirm("Are you sure you want to remove this ship?")) {
            removeShip({ variables: { shipId } });
        }
    };
    
    return (
        <div>
            {ship && (
                <div>
                    <h1>{ship.Ship} {ship.Model}</h1>
                    <p>HIN: {ship.HIN}</p>
                    <p>HRN: {ship.HRN}</p>
                    <p>Contact Number: {ship.contactNumber}</p>
                    <p>Annual Inspection Date: {ship.annualInspectionDate}</p>
                    <p>Five Year Inspection Date: {ship.fiveYearInspectionDate}</p>
                    <p>Sponson Serial Number: {ship.sponsonSerialNumber}</p>
                    <p>SRB Serial Number: {ship.SRBSerialNumber}</p>
                    <p>Fuel Tank Serial Number: {ship.fuelTankSerialNumber}</p>
                    <p>ZAPR 356C2BVMX Hook Serial Number: {ship.ZAPR356C2BVMXHookSerialNumber}</p>
                    <p>Engine Make/Model: {ship.engineMakeModel}</p>
                    <p>Engine Serial Number: {ship.engineSerialNumber}</p>
                    <p>Gear: {ship.gear}</p>
                    <p>Gear Serial Number: {ship.gearSerialNumber}</p>
                    <p> Jet: {ship.jet}</p>
                    <p> Jet Serial Number: {ship.jetSerialNumber}</p>
                    <p>POC Name: {ship.POCName}</p>
                    <p>POC Email: {ship.POCEmail}</p>
                    <p>POC Phone Number: {ship.POCPhoneNumber}</p>
                    <p>ID: {ship._id}</p>
                    <button onClick={handleRemoveShip}>Remove Ship</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label>
                    Ship
                    <input
                        type="text"
                        name="Ship"
                        value={formData.Ship}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Model
                    <input
                        type="text"
                        name="Model"
                        value={formData.Model}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    HIN
                    <input
                        type="text"
                        name="HIN"
                        value={formData.HIN}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    HRN
                    <input
                        type="text"
                        name="HRN"
                        value={formData.HRN}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact Number
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Annual Inspection Date
                    <input
                        type="text"
                        name="annualInspectionDate"
                        value={formData.annualInspectionDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Five Year Inspection Date
                    <input
                        type="text"
                        name="fiveYearInspectionDate"
                        value={formData.fiveYearInspectionDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Sponson Serial Number
                    <input
                        type="text"
                        name="sponsonSerialNumber"
                        value={formData.sponsonSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Fuel Tank Serial Number
                    <input
                        type="text"
                        name="fuelTankSerialNumber"
                        value={formData.fuelTankSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    SRB Serial Number
                    <input
                        type="text"
                        name="SRBSerialNumber"
                        value={formData.SRBSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    ZAPR 356C2BVMX Hook Serial Number
                    <input
                        type="text"
                        name="ZAPR356C2BVMXHookSerialNumber"
                        value={formData.ZAPR356C2BVMXHookSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Engine Make/Model
                    <input
                        type="text"
                        name="engineMakeModel"
                        value={formData.engineMakeModel}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Engine Serial Number
                    <input
                        type="text"
                        name="engineSerialNumber"
                        value={formData.engineSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gear
                    <input
                        type="text"
                        name="gear"
                        value={formData.gear}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gear Serial Number 
                    <input
                        type="text"
                        name="gearSerialNumber"
                        value={formData.gearSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Jet
                    <input
                        type="text"
                        name="jet"
                        value={formData.jet}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Jet Serial Number
                    <input
                        type="text"
                        name="jetSerialNumber"
                        value={formData.jetSerialNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    VolvoQ0087
                    <input
                        type="text"
                        name="volvoQ0087"
                        value={formData.volvoQ0087}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    POC Name
                    <input
                        type="text"
                        name="POCName"
                        value={formData.POCName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    POC Email
                    <input
                        type="text"
                        name="POCEmail"
                        value={formData.POCEmail}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    POC Phone Number
                    <input
                        type="text"
                        name="POCPhoneNumber"
                        value={formData.POCPhoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" disabled={loading}>Update Ship</button>
{error && <p>Error: {error.message}</p>}
</form>
</div>

    );
};

export default ChangeShip;
                


