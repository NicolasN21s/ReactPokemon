require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database connected'))
.catch((err) => console.error('Database connection error:', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Aquí se verifica el usuario y contraseña en base de datos
    if (username === 'ASPIDA' && password === '12345-') {
        res.json({ success: true, token: 'your_jwt_token_here' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});