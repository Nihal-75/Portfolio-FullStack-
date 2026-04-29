const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      trim: true,
      maxlength: [50, 'Category cannot exceed 50 characters'],
    },
    items: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skill', skillSchema);
