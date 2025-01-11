import db from '../models/index.js';
let gethomepage =async(req,res)=>{
    try {
        let data=await db.User.findAll();
        console.log('---------');
        console.log(data);
        console.log('---------');
    } catch (error) {
        console.log(error);
    }
    return res.render('Homepage.ejs');
}
module.exports = {
    gethomepage:gethomepage
}