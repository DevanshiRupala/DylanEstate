import dbConnection from '../server/database/db.connection.js';
import propertyRoute from '../server/property/property.route.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 } 
});
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10MB' }));

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});

dbConnection();

app.use('/', propertyRoute);