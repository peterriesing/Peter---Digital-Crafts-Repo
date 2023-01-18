'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    static associate(models) {
      Employees.hasOne(models.Patient, {
        foreignKey: "employeeAssignedID",
        onDelete: "CASCADE"
      })
      Employees.belongsTo(models.Clinics,{
        foreignKey: "clinicID"
      })
    }
  }
  Employees.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    clinicID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};