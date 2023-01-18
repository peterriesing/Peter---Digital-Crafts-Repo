'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinics extends Model {
    static associate(models) {
      Clinics.hasOne(models.Employees,{
        foreignKey: "clinicID",
        onDelete: "CASCADE"
      })
    }
  }
  Clinics.init({
    clinicName: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinics',
  });
  return Clinics;
};