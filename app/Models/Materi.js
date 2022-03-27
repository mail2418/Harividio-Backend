const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const Materi = db.define(
    'Materi', 
    {
        judul_materi:{type: sequelize.STRING},
        durasi_materi: {type:sequelize.FLOAT},
        judul_sub_materi: {type:sequelize.STRING},
        durasi_sub_materi:{type:sequelize.FLOAT},
        jenis_sub_materi:{type:sequelize.BOOLEAN},
        url_video_materi:{type:sequelize.STRING},
    },
    {
        freezeTableName: true
    }
);

module.exports = Materi;