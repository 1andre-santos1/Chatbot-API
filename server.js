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


const sequelize = new Sequelize('davsa9krl78qln','hbuzrjvxjisohx','4593e3d226ad19ba0b88b32d025a377642aab7334ab98d0e1e77cc178f073693',{
    host: 'ec2-54-243-208-234.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{
        "ssl": true
    }
});

apiUtilizadores(app, db);
apiLocalizacao(app, db);
apiAreas(app, db);
apiVagas(app, db);
apiLogin(app, db);
apiGeneralQuestions(app);
apiSpecificQuestions(app);

var port = process.env.PORT || 8000;


sequelize.sync().then(function(){
    app.listen(port, function(){
            console.log(`A escuta no porto ${port}`);
    });
});



   


