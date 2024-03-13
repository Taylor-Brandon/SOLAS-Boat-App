const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  },
  pdfs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pdf'
    }
  ],
  ships: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ship'
    }
  ]
});

const User = model("User", userSchema);

module.exports = User;