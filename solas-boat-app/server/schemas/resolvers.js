const { User, Ship, Pdf } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('pdfs').populate('ships');
    },
    ships: async() => {
      return await Ship.find({}).populate('user');
    },
    pdfs: async() => {
      return await Pdf.find({}).populate('user');
    }
  },
};

module.exports = resolvers;