import express from 'express';
const helmet = require('helmet');
const cors = require('cors');
const career = require('./routes/career.route');

const app = express();
const api = 'api';

// variables 
app.set('port', 3000)

// middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use(`/${api}`, career);

// server running 
app.listen(app.get('port'), ()=>{
    console.log(`Server running on PORT: ${app.get('port')}`)    
})

export default app;