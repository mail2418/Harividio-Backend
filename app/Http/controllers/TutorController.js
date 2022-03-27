const Tutor = require("../../Models/Tutors");

const TutorController = async(req,res)=>{
    try{
        const {nama_tutor,pekerjaan_saat_ini,
               deskripsi_tutor,linkedin,
               instagram,facebook,gambar_Tutor} = req.body;
        const newTutor = new Tutor({
            nama_tutor,pekerjaan_saat_ini,
            deskripsi_tutor,linkedin,
            instagram,facebook,gambar_Tutor
        });

        await newTutor.save();
        res.json(newTutor);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}

module.exports = TutorController;