const asyncHandler = require('../middleware/asyncHandler');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Service = require('../models/Service');
const Education = require('../models/Education');
const Contact = require('../models/Contact');

// @desc    Get profile information
// @route   GET /api/profile
// @access  Public
exports.getProfile = asyncHandler(async (req, res, next) => {
  // Assuming there's only one profile document for the portfolio owner
  const profile = await Profile.findOne();
  
  if (!profile) {
    res.status(404);
    throw new Error('Profile not found');
  }

  res.status(200).json({
    success: true,
    data: profile,
  });
});

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
exports.getSkills = asyncHandler(async (req, res, next) => {
  const skills = await Skill.find();

  res.status(200).json({
    success: true,
    count: skills.length,
    data: skills,
  });
});

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = asyncHandler(async (req, res, next) => {
  // Sort projects by year descending (newest first)
  const projects = await Project.find().sort({ year: -1 });

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects,
  });
});

// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find();

  res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
});

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
exports.getEducation = asyncHandler(async (req, res, next) => {
  const education = await Education.find();

  res.status(200).json({
    success: true,
    count: education.length,
    data: education,
  });
});

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
exports.submitContact = asyncHandler(async (req, res, next) => {
  const { name, email, message } = req.body;

  // Basic validation (Mongoose also validates this, but this gives a clearer initial response)
  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please provide name, email, and message');
  }

  const contact = await Contact.create({
    name,
    email,
    message,
  });

  res.status(201).json({
    success: true,
    message: 'Message sent successfully',
    data: contact,
  });
});
