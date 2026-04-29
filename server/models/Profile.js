const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    title: {
      type: String,
      required: [true, 'Professional title is required'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    tagline: {
      type: String,
      required: [true, 'Tagline is required'],
      trim: true,
      maxlength: [300, 'Tagline cannot exceed 300 characters'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email address',
      ],
    },
    phone: {
      type: String,
      trim: true,
      match: [
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
        'Please add a valid phone number',
      ],
    },
    linkedin: {
      type: String,
      trim: true,
      match: [
        /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
        'Please add a valid LinkedIn URL',
      ],
    },
    github: {
      type: String,
      trim: true,
      match: [
        /^https?:\/\/(www\.)?github\.com\/.*$/,
        'Please add a valid GitHub URL',
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Profile', profileSchema);
