const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const DataPribadi = sequelize.define(
  "data_pribadi",
  {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notelp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kota: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    negara: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timeStamp: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

module.exports = DataPribadi;
