import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const { STATIC_DIR_NAME, PORT } = process.env;

if (!STATIC_DIR_NAME || !PORT) {
    throw new Error('Environment variables are not specified (.env)');
}

const getPathStatic = () => path.resolve(__dirname, STATIC_DIR_NAME);

const app = express();

app.use(express.static(getPathStatic()));

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${PORT} port. http://localhost:${PORT}`);
});
