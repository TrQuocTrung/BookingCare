import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);

let createUse = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashpasswordfrombycrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashpasswordfrombycrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === 1 ? true : false,
            })
            resolve('create user success');
        } catch (error) {
            reject(error);
        }
    })

}
let getalluser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,

            })
            return resolve(users)
        } catch (error) {
            reject(error)
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
let getuserInfoByID =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where : {id:userId}
            })
            if(user){
                resolve(user)
            }else{
                resolve([])
            }
        } catch (error) {
            reject(error)
        }
    })
}
let edituser =(data)=>{
  return new Promise(async(resolve,reject)=>{
    try {
        let user= await db.User.findOne({
            where : {id:data.id}
        })
        if(user){
            user.firstName=data.firstName;
            user.lastName=data.lastName;
            user.address=data.address;
            user.phoneNumber=data.phoneNumber;
            await user.save();
            let getalluser= await db.User.findAll();
            resolve(getalluser); 
        }else{
            reject();
        }
    } catch (error) {
        reject(error)
    }
  })
}
let deletecrud=(userid)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let  deleteuser = await db.User.findOne({
                where : {id:userid}
            })
            if(deleteuser){
                await deleteuser.destroy();
                let allusers =db.User.findAll();
                resolve(allusers)
            }
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createUse: createUse,
    getalluser : getalluser,
    getuserInfoByID  : getuserInfoByID,
    edituser:edituser,
    deletecrud:deletecrud
}