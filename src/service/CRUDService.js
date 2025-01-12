import bcrypt from 'bcryptjs';
import db from '../models/index.js';
const salt = bcrypt.genSaltSync(10);

let createUse = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
    let hashpasswordfrombycrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashpasswordfrombycrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address:data.address,
                phoneNumber:data.phoneNumber,
                gender:data.gender===1?true:false,
            })
            resolve('create user success');
        } catch (error) {
            reject(error);
        }
    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashpassword = await bcrypt.hashSync(password, salt);
            resolve(hashpassword);
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createUse: createUse
}