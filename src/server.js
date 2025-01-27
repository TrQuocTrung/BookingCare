import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from'./config/viewEngine';
import initWebRoutes from './route/web';
import ConnectDB from './config/ConnectBD';
require('dotenv').config();
let app = express();
//config view engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
viewEngine(app);
initWebRoutes(app);
ConnectDB();
let port = process.env.PORT || 6969;  
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});  