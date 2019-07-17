const AssistantV1 = require('ibm-watson/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');


    const app = express();

    app.use(bodyParser.json());

    const service = new AssistantV1({
        version: '2019-02-28',
        iam_apikey: 'g-cGaEgy_THLCHOH7qR3c7QpUFETx2Sf93wJenhtSVFC',
        url: 'https://gateway-fra.watsonplatform.net/assistant/api'
    });

module.exports = function (app) {
    app.post('/specificQuestions/', (req, res) => {
        const { text} = req.body;
    
        const params = {
        input: { text },
        workspace_id: 'c303917c-dbc6-4cef-a713-8159bb67fa4a'
        };
    
        service.message(params, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        } else {
            res.json(response);
        }
        });
    });
}