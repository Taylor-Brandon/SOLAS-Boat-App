const { Schema, model } = require('mongoose');

const pdfSchema = new Schema({
  fileName: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  users: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]
});

const Pdf = model('Pdf', pdfSchema);

module.exports = Pdf;