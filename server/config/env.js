import dotenv from 'dotenv';

dotenv.config();

const { env: e } = process;

export const envConfig = {
    MONGO_URL: e.DB_URI,
    EMAIL_USER: e.EMAIL_USER,
    EMAIL_PASS: e.EMAIL_PASS,
};
