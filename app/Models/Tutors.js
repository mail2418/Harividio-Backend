const sequelize = require('sequelize');
const db = require("../../config/sequelize");

const Tutor = db.define(
    'Tutor', 
    {
        nama_tutor:{type: sequelize.STRING},
        pekerjaan_saat_ini:{type: sequelize.STRING},
        deskripsi_tutor:{type: sequelize.STRING},
        linkedin:{type: sequelize.STRING},
        instagram:{type: sequelize.STRING},
        facebook:{type: sequelize.STRING},
        gambar_Tutor:{type:sequelize.STRING},
    },
    {
        freezeTableName: true
    }
);

module.exports = Tutor;