const express = require('express');
const {
  getProfile,
  getSkills,
  getProjects,
  getServices,
  getEducation,
  submitContact,
} = require('../controllers/portfolioController');

const router = express.Router();

router.get('/profile', getProfile);
router.get('/skills', getSkills);
router.get('/projects', getProjects);
router.get('/services', getServices);
router.get('/education', getEducation);
router.post('/contact', submitContact);

module.exports = router;
