const Class = require("../../Models/Classes");

const ClassController = async(req,res)=>{
    try{
        const {class_name,description,cost,
               promo_status,jumlah_diskon,kategori,
               video_introduct,gambar_class} = req.body;

        const newClass= new Class({
            class_name,description,cost,
            promo_status,jumlah_diskon,kategori,
            video_introduct,gambar_class
        });

        await newClass.save();
        res.json(newClass);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}

module.exports = ClassController;