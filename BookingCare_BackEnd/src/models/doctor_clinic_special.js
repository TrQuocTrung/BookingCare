'use strict';
const {
  Model
} = require('sequelize');
const specialty = require('./specialty');
module.exports = (sequelize, DataTypes) => {
  class doctor_clinic_special extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doctor_clinic_special.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'doctor_clinic_special',
  });
  return doctor_clinic_special;
};