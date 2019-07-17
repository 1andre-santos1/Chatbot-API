const AssistantV1 = require('ibm-watson/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const service = new AssistantV1({
    version: '2019-02-28',
    iam_apikey: 'g-cGaEgy_THLCHOH7qR3c7QpUFETx2Sf93wJenhtSVFC',
    url: 'https://gateway-fra.watsonplatform.net/assistant/api'

});

app.post('/generalQuestions/', (req, res) => {
    const { text} = req.body;
  
    const params = {
      input: { text },
      workspace_id: '71906683-ac8a-42fb-9173-97034aea0be0'
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
  
  app.listen(port, () => console.log(`Running on port ${port}`));
  