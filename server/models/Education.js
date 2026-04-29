const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, 'Degree name is required'],
      trim: true,
      maxlength: [100, 'Degree name cannot exceed 100 characters'],
    },
    college: {
      type: String,
      required: [true, 'College name is required'],
      trim: true,
      maxlength: [150, 'College name cannot exceed 150 characters'],
    },
    year: {
      type: String,
      required: [true, 'Year/Duration is required (e.g., 2018-2022)'],
      trim: true,
      maxlength: [20, 'Year string cannot exceed 20 characters'],
    },
    cgpa: {
      type: Number,
      required: [true, 'CGPA is required'],
      min: [0, 'CGPA cannot be negative'],
      max: [10, 'CGPA cannot exceed 10'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Education', educationSchema);
