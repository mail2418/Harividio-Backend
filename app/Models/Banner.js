const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const Banner = db.define(
    'Banner', 
    {
        judul_banner:{type: sequelize.STRING},
        description_banner:{type: sequelize.STRING},
        gambar_banner:{type: sequelize.STRING},
    },
    {
        freezeTableName: true
    }
);

module.exports = Banner;