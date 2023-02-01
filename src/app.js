const express = require('express');
const { userController } = require('./controller');
// ...
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(express.json());
app.get('/user', validateJWT, userController.getAll);
app.post('/login', userController.login);
app.post('/user', userController.createUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
