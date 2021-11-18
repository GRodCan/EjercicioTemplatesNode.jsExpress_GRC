const hour= require('../utils/hour')
const application = {
    home: (req,res)=>{
        res.status(200).render('home')
    },
    who: (req,res)=>{
        res.status(200).render('who')
    },
    where: (req,res)=>{
        res.status(200).render('where')
    },
    work: (req,res)=>{
        res.status(200).render('work')
    },
    contact: (req,res)=>{
        res.status(200).render('contact')
    },
    others: (req,res)=>{
        res.status(200).render('others',{hour:hour})
    }
};
module.exports=application;