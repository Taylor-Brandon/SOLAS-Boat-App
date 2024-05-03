const { AuthenticationError } = require('apollo-server-express');
const { User, Ship, Pdf } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('pdfs').populate('ships');
    },
    user: async (parent, { userId }) => {
      try {
        return await User.findById(userId).populate('pdfs').populate('ships');
      } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
      }
    },
    ships: async () => {
      return await Ship.find({}).populate('user');
    },
    ship: async(parent, {shipId}) => {
      try {
        return await Ship.findById(shipId).populate('user');
      } catch (error) {
        console.error('Error fetching ship:', error);
        throw error;
      }
    },
    pdfs: async () => {
      return await Pdf.find({}).populate('user');
    },
    pdf: async(parent, {pdfId}) => {
      try {
        return await Pdf.findById(pdfId).populate('user');
      } catch (error) {
        console.error('Error fetching pdf:', error);
        throw error;
      }
    }
  },

  Mutation: {
    addUser: async (parent, {firstName, lastName, email, password, admin}) => {
      const user = await User.create({ firstName, lastName, email, password, admin});
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }
    
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password!');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    
    addShip: async (parent, {Ship, Model, HRN, HIN, ContactNumber, SponsonSerialNumber, SRBSerialNumber, fuelTankSerialNumber, ZAPR356C2BVMXHookSerialNumber, engineMakeModel, engineSerialNumber, POCName, POCEmail, POCPhoneNumber}) => {
      try {
        return await Ship.create({Ship, Model, HRN, HIN, ContactNumber, SponsonSerialNumber, SRBSerialNumber, fuelTankSerialNumber, ZAPR356C2BVMXHookSerialNumber, engineMakeModel, engineSerialNumber, POCName, POCEmail, POCPhoneNumber});
      } catch (error) {
        console.error('Error adding ship:', error);
        throw error;
      }
    },
    addPdf: async (parent, {fileName, path}) => {
      try {
        return await Pdf.create({fileName, path});
      } catch (error) {
        console.error('Error adding pdf:', error);
        throw error;
      }
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    updateUser: async (_, { userId, firstName, lastName, email, password, admin }) => {
      try {
        const user = await User.findById(userId);

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (password) user.password = password; 
        if (admin !== undefined) user.admin = admin;

        await user.save();

        return user;
      } catch (error) {
        throw new Error('Failed to update user information');
      }
    },
    removeShip: async (parent, { shipId }) => {
      return Ship.findByIdAndDelete({ _id: shipId });
    },
    removePdf: async (parent, { pdfId }) => {
      return Pdf.findByIdAndDelete({ _id: pdfId });
    }
  } 
}; 

module.exports = resolvers;
