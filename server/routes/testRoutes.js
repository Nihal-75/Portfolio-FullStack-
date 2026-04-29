const express = require('express');
const { testPing } = require('../controllers/testController');

const router = express.Router();

// GET /api/test
router.get('/test', testPing);

module.exports = router;
