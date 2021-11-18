const application= require("../controllers/application");
const routes= require('express').Router();

routes.get("/", application.home);
routes.get("/who", application.who);
routes.get("/where", application.where);
routes.get("/work", application.work);
routes.get("/contact", application.contact);
routes.get("/others", application.others);

module.exports=routes;