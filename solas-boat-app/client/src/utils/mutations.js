import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $admin: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, admin: $admin) {
      token
      user {
        _id
        firstName
        lastName
        admin
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        admin
      }
    }
  }
`;

export const ADD_SHIP = gql`
  mutation addShip($Ship: String!, $Model: String!, $HRN: String, $HIN: String!, $contactNumber: String!, $annualInspectionDate: String!, $fiveYearInspectionDate: String!, $sponsonSerialNumber: String!, $SRBSerialNumber: String!, $fuelTankSerialNumber: String!, $ZAPR356C2BVMXHookSerialNumber: String!, $engineMakeModel: String!, $engineSerialNumber: String!, $gear: String, $POCName: String, $POCEmail: String, $POCPhoneNumber: String, $Notes: String) {
    addShip(Ship: $Ship, Model: $Model, HRN: $HRN, HIN: $HIN, contactNumber: $contactNumber, annualInspectionDate: $annualInspectionDate, fiveYearInspectionDate: $fiveYearInspectionDate, sponsonSerialNumber: $sponsonSerialNumber, SRBSerialNumber: $SRBSerialNumber, fuelTankSerialNumber: $fuelTankSerialNumber, ZAPR356C2BVMXHookSerialNumber: $ZAPR356C2BVMXHookSerialNumber, engineMakeModel: $engineMakeModel, engineSerialNumber: $engineSerialNumber, gear: $gear, POCName: $POCName, POCEmail: $POCEmail, POCPhoneNumber: $POCPhoneNumber, Notes: $Notes) {
      ship {
        _id
        Ship
        Model
        HRN
        HIN
        contactNumber
        annualInspectionDate
        fiveYearInspectionDate
        sponsonSerialNumber
        SRBSerialNumber
        fuelTankSerialNumber
        ZAPR356C2BVMXHookSerialNumber
        engineMakeModel
        engineSerialNumber
        gear
        POCName
        POCEmail
        POCPhoneNumber
      }
    }
  }
`;

export const ADD_PDF = gql`
  mutation addPdf($fileName: String!, $path: String!) {
    addPdf(fileName: $fileName, path: $path) {
      pdf {
        _id
        fileName
        path
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      firstName
      lastName
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $firstName: String, $lastName: String, $email: String, $password: String, $admin: Boolean) {
    updateUser(userId: $userId, firstName: $firstName, lastName: $lastName, email: $email, password: $password, admin: $admin) {
      _id
      firstName
      lastName
      email
      password
      admin
    }
  }
`;
export const UPDATE_SHIP = gql`
  mutation updateShip(
    $shipId: ID!
    $Ship: String!
    $Model: String!
    $HRN: String
    $HIN: String!
    $contactNumber: String!
    $annualInspectionDate: String!
    $fiveYearInspectionDate: String!
    $sponsonSerialNumber: String!
    $SRBSerialNumber: String!
    $fuelTankSerialNumber: String!
    $ZAPR356C2BVMXHookSerialNumber: String!
    $engineMakeModel: String!
    $engineSerialNumber: String!
    $gear: String!
    $POCName: String
    $POCEmail: String
    $POCPhoneNumber: String
    $Notes: String
  ) {
    updateShip(
      shipId: $shipId
      Ship: $Ship
      Model: $Model
      HRN: $HRN
      HIN: $HIN
      contactNumber: $contactNumber
      annualInspectionDate: $annualInspectionDate
      fiveYearInspectionDate: $fiveYearInspectionDate
      sponsonSerialNumber: $sponsonSerialNumber
      SRBSerialNumber: $SRBSerialNumber
      fuelTankSerialNumber: $fuelTankSerialNumber
      ZAPR356C2BVMXHookSerialNumber: $ZAPR356C2BVMXHookSerialNumber
      engineMakeModel: $engineMakeModel
      engineSerialNumber: $engineSerialNumber
      gear: $gear
      POCName: $POCName
      POCEmail: $POCEmail
      POCPhoneNumber: $POCPhoneNumber
      Notes: $Notes
    ) {
      _id
      Ship
      Model
      HRN
      HIN
      contactNumber
      annualInspectionDate
      fiveYearInspectionDate
      sponsonSerialNumber
      SRBSerialNumber
      fuelTankSerialNumber
      ZAPR356C2BVMXHookSerialNumber
      engineMakeModel
      engineSerialNumber
      gear
      POCName
      POCEmail
      POCPhoneNumber
    }
  }
`;



export const REMOVE_SHIP = gql`
  mutation removeShip($shipId: ID!) {
    removeShip(shipId: $shipId) {
      ship {
        _id
        Ship
        Model
      }
    }
  }
`;

export const REMOVE_PDF = gql`
  mutation removePdf($pdfId: ID!) {
    removePdf(pdfId: $pdfId) {
      _id
      fileName
      path
    }
  }
`;

