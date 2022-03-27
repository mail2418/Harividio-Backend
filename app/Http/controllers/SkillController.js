const Skill = require("../../Models/Skills");

const SkillController = async(req,res)=>{
    try{
        const {skill_didapat} = req.body;
        const newSkill = new Skill({
            skill_didapat
        });

        await newSkill.save();
        res.json(newSkill);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}
module.exports = SkillController;