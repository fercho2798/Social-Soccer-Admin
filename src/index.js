const express = require('express');
const morgan = require('morgan');

//initialization
const app=express();

//settings
app.set('port', process.env.PORT || 4000);

//middelware
app.use(morgan('dev'));


// start
app.listen(app.get('port'),()=>{
    console.log('seerver on port', app.get('port'))
})