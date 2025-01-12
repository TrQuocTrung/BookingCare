import db from '../models/index.js';
import CRUDService from '../service/CRUDService.js';
let gethomepage =async(req,res)=>{
    try {
        let data=await db.User.findAll();
        console.log('---------');
        console.log(data);
        return res.render('Homepage.ejs',{
            data:JSON.stringify(data)
        });
        console.log('---------');
    } catch (error) {
        console.log(error);
    }
}
let CURD = (req,res)=>{
    return res.render('CURD.ejs');
}
let addUser = async(req,res)=>{
    let message = await CRUDService.createUse(req.body);
    console.log(message);
    console.log(req.body);
    return res.send('add user success');
}
module.exports = {
    gethomepage:gethomepage,
    CURD: CURD,
    addUser: addUser
}