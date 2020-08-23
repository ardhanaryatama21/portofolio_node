const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Skill = sequelize.define(
  "skill",
  {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gambar: {
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

module.exports = Skill;
