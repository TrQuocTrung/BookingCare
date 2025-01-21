import express, { Router } from 'express';
import HomeController from '../controllers/HomeController';
import userController from '../controllers/userController';
let route = express.Router();
 let initWebRoutes = (app) => {
    route.get('/', HomeController.gethomepage);
    route.get('/CURD',HomeController.CURD)
    route.post('/addUser',HomeController.addUser);
    route.get('/getalluser',HomeController.getcrud);
    route.get('/edit-crud',HomeController.getEditCrud)
    route.post('/putcrud',HomeController.putcrud)
    route.get('/delete-crud',HomeController.deletecrud)
    route.post('/api/handleLogin',userController.handleLogin)
    return app.use('/',route);

 }

 module.exports = initWebRoutes;