import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      firstName
      lastName
      email
      admin
    }
  }
`;
export const QUERY_SINGLE_PROFILE = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      email
      admin
    }
  }
`;

export const QUERY_SHIPS = gql`
  query allShips {
    ships {
      _id
      Ship
      Model
      HRN
      HIN
      ContactNumber
      SponsonSerialNumber
      SRBSerialNumber
      fuelTankSerialNumber
      ZAPR356C2BVMXHookSerialNumber
      engineMakeModel
      engineSerialNumber
      POCName
      POCEmail
      POCPhoneNumber
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_SINGLE_SHIP= gql`
  query singleShip($shipId: ID!) {
    ship(shipId: $shipId) {
      _id
      Ship
      Model
      HRN
      HIN
      ContactNumber
      SponsonSerialNumber
      SRBSerialNumber
      fuelTankSerialNumber
      ZAPR356C2BVMXHookSerialNumber
      engineMakeModel
      engineSerialNumber
      POCName
      POCEmail
      POCPhoneNumber
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;


export const QUERY_PDFS = gql`
  query allPdfs {
    pdfs {
      _id
      fileName
      path
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_SINGLE_PDF = gql`
  query singlePdf(pdfId: ID!) {
    pdf(pdfId: $pdfId) {
      _id
      fileName
      path
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

