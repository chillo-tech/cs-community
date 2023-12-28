import mongoose from 'mongoose';

export const dbInit = async () => {
  try {
    if (!process.env.DB_URI) {
      console.log('DB_URI env variable is undefined');
      return false;
    }
    await mongoose.connect(process.env.DB_URI);
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};
