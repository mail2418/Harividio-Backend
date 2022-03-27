const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const User = db.define(
    'User', 
    {
        username:{type: sequelize.STRING, unique: true},
        email: {type:sequelize.STRING},
        password: {type:sequelize.STRING}
    },
    {
        freezeTableName: true
    }
);

module.exports = User;