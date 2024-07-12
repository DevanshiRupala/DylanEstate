import mongoose from 'mongoose';
import { envConfig } from '../config/env.js';

const connect = async () => {
  try {
    await mongoose.connect(envConfig.MONGO_URL, {
      authSource: 'admin',
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connect;
