const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const Skills = db.define(
    'Skills', 
    {
        Skill_didapat:{type: sequelize.STRING}    
    },
    {
        freezeTableName: true
    }
);

module.exports = Skills;