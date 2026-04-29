/**
 * @desc   Health-check / API test
 * @route  GET /api/test
 * @access Public
 */
const testPing = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is up and running 🚀',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
};

module.exports = { testPing };
