'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.belongsTo(models.Employees, {
        foreignKey: "employeeAssignedID",
        onDelete: "CASCADE"
      })
    }
  }
  Patient.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    employeeAssignedID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};