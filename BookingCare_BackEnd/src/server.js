import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from'./config/viewEngine';
import initWebRoutes from './route/web';
import ConnectDB from './config/ConnectBD';
import cors from 'cors'
require('dotenv').config();

let app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Chỉ cho phép frontend truy cập
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức được phép
    credentials: true, // Nếu có gửi cookie/session
}));

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