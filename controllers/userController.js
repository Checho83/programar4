
const path = require('path');

const userController = {
    estudio: (req,res)=>{
       res.render('user/estudio');
   },
    exp:(req,res)=>{
      res.render('user/exp');
     
    },
/*     portf:(req,res)=>{
      res.render('user/portf');
    
    }, */
    contact:(req,res)=>{
      res.render('user/contact');
    },
/*     answer:(req,res)=>{
      console.log('entre');
      res.redirect('/');
     
    }, */

} 
module.exports = userController;