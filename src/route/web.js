import express, { Router } from 'express';
import HomeController from '../controllers/HomeController';
let route = express.Router();
 let initWebRoutes = (app) => {
    route.get('/', HomeController.gethomepage);
    app.use('/', route);

 }

 module.exports = initWebRoutes;