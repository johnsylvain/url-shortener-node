require('dotenv').config();

export const port = process.env.PORT || 5000;
export const appName = 'URL Shortener';
export const isDevelopment  = process.env.NODE_ENV !== "production";  

export const dbUri = process.env.MONGO_URI;
export const jwtSecret = process.env.SECRET;
