require('dotenv').config();

const express = require('express');
const app = express();

const db = require("../config/sequelize");
const port = process.env.PORT || 9000;
//Controllers
const UserController = require("../app/Http/controllers/UserController");
const BannerController = require("../app/Http/controllers/BannerController");
const ClassController = require("../app/Http/controllers/ClassController");
const MateriController = require("../app/Http/controllers/MateriController");
const SkillController = require("../app/Http/controllers/SkillController");
const TutorController = require("../app/Http/controllers/TutorController");

app.get('/',(req,res)=>{
    //halaman utama
    res.send("Node js respon berhasil");
})

app.use(express.urlencoded({extended:true}));

db.authenticate().then(()=>console.log("berhasil terkoneksi db"));

app.post("/UserForm",UserController);
app.post("/BannerForm",BannerController);
app.post("/ClassForm",ClassController);
app.post("/SkillForm",SkillController);
app.post("/MateriForm",MateriController);
app.post("/TutorForm",TutorController);


app.listen(port,(req,res)=>{
    console.log("port berjalan di ${port}");
})