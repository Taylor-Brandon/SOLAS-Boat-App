import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_SHIP } from "../../utils/mutations";


const AddShip = () => {
    const [formState, setFormState] = useState({
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
        POCName: '',
        POCEmail: '',
        POCPhoneNumber: '',
    });

    const [addShip, { error, data }] = useMutation(ADD_SHIP);


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (e) => {
        e.preventDefault();
      }

      return(
        <div className="container">
              <form className="form w-50 p-2" onSubmit={handleFormSubmit}>
            <div className="form-floating">
              <input
                className="form-control"
                value={formState.Ship}
                name="Ship"
                onChange={handleInputChange}
                type="text"
                placeholder="Ship Name"
              />
              <label htmlFor="ship" className="form-label">
                Ship Name
              </label>

              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.Model}
                name="Model"
                onChange={handleInputChange}
                type="text"
                placeholder="Model"
              />
              <label htmlFor="model" className="form-label">
                Model
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.HRN}
                name="HRN"
                onChange={handleInputChange}
                type="text"
                placeholder="HRN"
              />
              <label htmlFor="hrn" className="form-label">
                HRN
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.HIN}
                name="HIN"
                onChange={handleInputChange}
                type="text"
                placeholder="HIN"
              />
              <label htmlFor="hin" className="form-label">
                HIN
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.contactNumber}
                name="contactNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Contact Number"
              />
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.annualInspectionDate}
                name="annualInspectionDate"
                onChange={handleInputChange}
                type="text"
                placeholder="Annual Inspection Date"
              />
              <label htmlFor="annualInspectionDate" className="form-label">
                Annual Inspection Date
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.fiveYearInspectionDate}
                name="fiveYearInspectionDate"
                onChange={handleInputChange}
                type="text"
                placeholder="Five Year Inspection Date"
              />
              <label htmlFor="fiveYearInspectionDate" className="form-label">
                Five Year Inspection Date
              </label>
              </div>


              <div className="form-floating">
              <input
                className="form-control"
                value={formState.sponsonSerialNumber}
                name="sponsonSerialNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Sponson Serial Number"
              />
              <label htmlFor="sponsonSerialNumber" className="form-label">
                Sponson Serial Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.fuelTankSerialNumber}
                name="fuelTankSerialNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Fuel Tank Serial Number"
              />
              <label htmlFor="fuelTankSerialNumber" className="form-label">
                Fuel Tank Serial Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.ZAPR356C2BVMXHookSerialNumber}
                name="ZAPR356C2BMXHookSerialNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Zapr 356C2BMX Hook Serial Number"
              />
              <label htmlFor="zapr356c2bmxHookSerialNumber" className="form-label">
                ZAPR 356C2BVMX Hook Serial Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.engineMakeModel}
                name="engineMakeModel"
                onChange={handleInputChange}
                type="text"
                placeholder="Engine Make/Model"
              />
              <label htmlFor="engineMakeModel" className="form-label">
                Engine Make/Model
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.engineSerialNumber}
                name="engineSerialNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Engine Serial Number"
              />
              <label htmlFor="engineSerialNumber" className="form-label">
                Engine Serial Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.gear}
                name="gear"
                onChange={handleInputChange}
                type="text"
                placeholder="Gear"
              />
              <label htmlFor="gear" className="form-label">
                Gear
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.gearSerialNumber}
                name="gearSerialNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="Gear Serial Number"
              />
              <label htmlFor="gearSerialNumber" className="form-label">
                Gear Serial Number
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.POCName}
                name="POCName"
                onChange={handleInputChange}
                type="text"
                placeholder="POC Name"
              />
              <label htmlFor="pocName" className="form-label">
                POC Name
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.POCEmail}
                name="POCEmail"
                onChange={handleInputChange}
                type="text"
                placeholder="POC Email"
              />
              <label htmlFor="pocEmail" className="form-label">
                POC Email
              </label>
              </div>

              <div className="form-floating">
              <input
                className="form-control"
                value={formState.POCPhoneNumber}
                name="POCPhoneNumber"
                onChange={handleInputChange}
                type="text"
                placeholder="POC Phone Number"
              />
              <label htmlFor="pocPhoneNumbber" className="form-label">
                POC Phone Number
              </label>
              </div>
              <button className="btn btn-warning mx-auto" type="submit">Submit</button>
              </form>
              </div>
      )
}


export default AddShip;