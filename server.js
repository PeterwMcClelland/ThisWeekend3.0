const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const PORT = 5002;


mongoose.connect( process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());


app.use(cors()); 


const signupRouter = require('./src/components/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/components/LoginForm/login');
app.use('/api/login', loginRouter);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


