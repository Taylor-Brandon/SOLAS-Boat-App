const { User, Ship, Pdf } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    ships: async() => {
      return await Ship.find({});
    },
    pdfs: async() => {
      return await Pdf.find({});
    }
  },
};

module.exports = resolvers;