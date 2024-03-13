const {Schema, model} = require("mongoose");

const solasSchema = new Schema({
    Ship: {
        type: String,
        required: true
    },
    Model: { 
        type: String
    },
    HRN: {
        type: String,
        required: true
    },
    HIN: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    sponsonSerialNumber: {
        type: String,
        required: true
    },
    SRBSerialNumber: { 
        type: String,
        required: true,
    },
    fuelTankSerialNumber: { 
        type: String,
        required: true
    },
    ZAPR356C2BVMXHookSerialNumber: {
        type: String,
        required: true
    },
    engineMakeModel: {
        type: String,
        required: true
    },
    engineSerialNumber: {
        type: String,
        required: true
    },
    POCName: { 
        type: String
    },
    POCEmail: {
        type: String
    },
    POCPhoneNumber: { 
        type: String
    },
    Notes: { 
        type: String
    },
});

const Ship = model("Ship", solasSchema);

module.exports = Ship;