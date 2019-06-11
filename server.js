//<------------------------------------chamadas--------------------------------------->//
const express  = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//<---------------------------------iniciando o app----------------------------------->//

const app = express();
app.use(express.json());
app.use(cors());

//<------------------------------iniciando o banco de dados -------------------------->//

mongoose.connect("mongodb:localhost:27017/node-api", { useNewUrlParser: true }
);
 requireDir("./src/models");

//<---------------------------------primeira rota--------------------------------->//

app.use('/api', require('./src/routes'));

//<------------------------------conectando a porta-------------------------------------->//
app.listen(3001);





