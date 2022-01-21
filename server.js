const express = require('express');
require('dotenv').config({path : './config/.env'})
const app = express();

app.listen(process.env.PORT,() => {  //PORT est la valeure que l'on a déclaré dans le .env
    console.log(`Listening on port ${process.env.PORT} ` );
})
