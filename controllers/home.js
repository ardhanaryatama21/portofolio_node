const DataPribadi = require("../models/data_pribadi");
const Skill = require("../models/skill");

exports.showHome = (req, res, next) => {
  DataPribadi.findAll()
    .then((dataPribadi) => {
      Skill.findAll().then((skillSaya) => {
        res.render("home", {
          pageTitle: "Muhammad Ardhan Aryatama - Home",
          dataPribadi: dataPribadi,
          skillSaya: skillSaya,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
