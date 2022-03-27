const Materi = require("../../Models/Materi");

const MateriController = async(req,res)=>{
    try{
        const {judul_materi,durasi_materi,
               judul_sub_materi,durasi_sub_materi,
               jenis_sub_materi,url_video_materi} = req.body;

        const newMateri= new Materi({
            judul_materi,durasi_materi,
            judul_sub_materi,durasi_sub_materi,
            jenis_sub_materi,url_video_materi
        });

        await newMateri.save();
        res.json(newMateri);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}

module.exports = MateriController;