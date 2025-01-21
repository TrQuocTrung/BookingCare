import db from '../models/index.js';
import CRUDService from '../service/CRUDService.js';
let gethomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('---------');
        console.log(data);
        return res.render('Homepage.ejs', {
            data: JSON.stringify(data)
        });
        console.log('---------');
    } catch (error) {
        console.log(error);
    }
}
let CURD = (req, res) => {
    return res.render('CURD.ejs');
}
let addUser = async (req, res) => {
    let message = await CRUDService.createUse(req.body);
    console.log(message);
    console.log(req.body);
    return res.send('add user success');
}
let getcrud = async (req, res) => {
    let getalluser = await CRUDService.getalluser();
    return res.render('Displayall.ejs', {
        getalluser: getalluser
    });
}
let getEditCrud = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getuserInfoByID(userId);
        console.log('===========');
        console.log(userData);
        console.log('===========');

        return res.render('editCRUD.ejs',{
            userData : userData
        });
    } else {
        return res.send("Error");
    }
}
let putcrud=async(req,res)=>{
    let data=req.body;
   let allusers= await CRUDService.edituser(data);
   return res.render('Displayall.ejs', {
    getalluser: allusers
});
}
let deletecrud=async(req,res)=>{
    let userid=req.query.id;
    let allusers= await CRUDService.deletecrud(userid);
    return res.render('Displayall.ejs',{
        getalluser: allusers
    })
}
module.exports = {
    gethomepage: gethomepage,
    CURD: CURD,
    addUser: addUser,
    getcrud: getcrud,
    getEditCrud: getEditCrud,
    putcrud:putcrud,
    deletecrud : deletecrud
}