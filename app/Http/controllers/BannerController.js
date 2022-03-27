const Banner = require("../../Models/Banner");

const BannerController = async(req,res)=>{
    try{
        const {judul_banner, description_banner, gambar_banner} = req.body;
        const newBanner = new Banner({
            judul_banner,description_banner,gambar_banner
        });

        await newBanner.save();
        res.json(newBanner);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}

module.exports = BannerController;