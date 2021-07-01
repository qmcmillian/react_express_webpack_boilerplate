const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();


// Serves static index.html file
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));


const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})
