import express, { Router } from 'express';
import HomeController from '../controllers/HomeController';
let route = express.Router();
 let initWebRoutes = (app) => {
    route.get('/', HomeController.gethomepage);
    route.get('/CURD',HomeController.CURD)
    route.post('/addUser',HomeController.addUser);
    return app.use('/',route);

 }

 module.exports = initWebRoutes;