const express = require('express');
const path = require('path');
require('dotenv').config();

const { STATIC_DIR_NAME, PORT } = process.env;

if (!STATIC_DIR_NAME || !PORT) {
    throw new Error('Environment variables are not specified (.env)');
}

const app = express();

const getPathStatic = () => path.resolve(__dirname, STATIC_DIR_NAME);

app.use(express.static(getPathStatic()));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} port. http://localhost:${PORT}`)
})
