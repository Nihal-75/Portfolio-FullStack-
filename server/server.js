require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to MongoDB before accepting requests
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`🌐  Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`\n⚡  ${signal} received — shutting down gracefully…`);
    server.close(() => {
      console.log('✅  HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT',  () => shutdown('SIGINT'));

  // Unhandled promise rejection guard
  process.on('unhandledRejection', (err) => {
    console.error('❌  Unhandled Rejection:', err.message);
    server.close(() => process.exit(1));
  });
};

startServer();
