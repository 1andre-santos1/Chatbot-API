const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');

const apiUtilizadores = require('./routes/apiUtilizadores.js');
const apiLocalizacao = require ('./routes/apiLocalizacoes.js');
const apiAreas = require ('./routes/apiArea.js');
const apiVagas = require('./routes/apiVagas');
const apiLogin = require ('./routes/apiLogin.js');
const apiGeneralQuestions = require ('./routes/apiGeneralQuestions.js');
const apiSpecificQuestions = require('./routes/apiSpecificQuestions.js');

const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Credentials", true)
    next();
});


const sequelize = new Sequelize('projetofinal','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

apiUtilizadores(app, db);
apiLocalizacao(app, db);
apiAreas(app, db);
apiVagas(app, db);
apiLogin(app, db);
apiGeneralQuestions(app);
apiSpecificQuestions(app);

//db.sequelize.sync().then(function(){
app.listen(8000, function(){
        console.log("A escuta no porto 8000");
});
//});



   


