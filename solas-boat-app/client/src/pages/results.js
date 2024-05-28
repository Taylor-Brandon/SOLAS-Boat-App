import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SHIPS } from "../utils/queries";
import "../styles/result.css";

const Results = () => {
  const { shipId } = useParams(); 
  const { loading, error, data } = useQuery(QUERY_SHIPS, {
      variables: { shipId } 
  });
  const [ship, setShip] = useState(null);

  useEffect(() => {
      if (data && data.ships) {
          const foundShip = data.ships.find(ship => ship._id === shipId); 
          setShip(foundShip); 
      }
  }, [data, shipId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div>
          {ship && (
              <div>
                  <h1>{ship.Ship}</h1>
                  <p>ID: {ship._id}</p>
                  <p>Model: {ship.Model}</p>
                  <p>HRN: {ship.HRN}</p>
                  <p>HIN: {ship.HIN}</p>
                  <p>Contact Number: {ship.contactNumber}</p>
                  <p>Annual Inspection Date: {ship.annualInspectionDate}</p>
                  <p>Sponson Serial Number: {ship.sponsonSerialNumber}</p>
                  <p>SRB Serial Number: {ship.SRBSerialNumber}</p>
                  <p>Fuel Tank Serial Number: {ship.fuelTankSerialNumber}</p>
                  <p>ZAPR 356C2BVMX Hook Serial Number: {ship.ZAPR356C2BVMXHookSerialNumber}</p>
                  <p>Engine Make/Model: {ship.engineMakeModel}</p>
                  <p>Engine Serial Number: {ship.engineSerialNumber}</p>
                  <p>POC Name: {ship.POCName}</p>
                  <p>POC Email: {ship.POCEmail}</p>
                  <p>POC Phone Number: {ship.POCPhoneNumber}</p>
                  
              </div>
          )}
      </div>
  );
};

export default Results;
