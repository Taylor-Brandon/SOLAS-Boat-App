const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    password: String
    admin: Boolean
  }
  type Ship {
    _id: ID
    Ship: String
    Model: String
    HRN: String
    HIN: String
    contactNumber: String
    sponsonSerialNumber: String
    SRBSerialNumber: String
    fuelTankSerialNumber: String
    ZAPR356C2BVMXHookSerialNumber: String
    engineMakeModel: String
    engineSerialNumber: String
    POCName: String
    POCEmail: String
    POCPhoneNumber: String
    Notes: String
  }
  type Pdf {
    _id: ID
    fileName: String
    path: String
  }
  type Query {
    users: [User]
    ships: [Ship]
    pdfs: [Pdf]
  }
`;

module.exports = typeDefs;