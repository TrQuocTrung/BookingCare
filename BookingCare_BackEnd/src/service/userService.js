import { where } from "sequelize"
import db from "../models/index"
import bcrypt from 'bcryptjs';

let handleUserLogin = (useremail, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(useremail);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes : ['email','roleId','password'],
                    where: { email: useremail },
                    raw:true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password); // true
                    if (check) {
                        user.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.password ;
                        console.log(user)
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'User not found ';
                }
                resolve(userData)
            } else {
                userData.errCode = 1,
                    userData.errMessage = `Your email is exist in your system.Plz try other email`,
                    resolve(userData)
            }
        } catch (error) {
            reject(error)
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail
}