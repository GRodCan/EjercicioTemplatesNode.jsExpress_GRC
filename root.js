//Requires
const express= require("express");
const applicationRouter = require('./routes/application');

const app = express();
const port=3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'))
app.use('/',applicationRouter)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })