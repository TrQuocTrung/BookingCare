import express, { Router } from 'express';
let route = express.Router();
 let initWebRoutes = (app) => {
    route.get('/', (req, res) => {
        return res.send('Hello World');
    });
    app.use('/', route);
 }
 module.exports = initWebRoutes;