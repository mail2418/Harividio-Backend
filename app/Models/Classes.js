const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const Class = db.define(
    'Class', 
    {
        class_name:{type: sequelize.STRING},
        description: {type:sequelize.STRING},
        cost: {type:sequelize.INTEGER},
        promo_status:{type:sequelize.BOOLEAN},
        jumlah_diskon:{type:sequelize.INTEGER},
        kategori:{type:sequelize.STRING},
        video_introduct:{type:sequelize.STRING},
        gambar_class:{type:sequelize.STRING},
        
    },
    {
        freezeTableName: true
    }
);

module.exports = Class;