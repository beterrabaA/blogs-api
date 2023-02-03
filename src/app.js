const express = require('express');
const { userController, catController, postController } = require('./controller');
// ...
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(express.json());
app.get('/user', validateJWT, userController.getAll);
app.get('/user/:id', validateJWT, userController.getById);
app.post('/login', userController.login);
app.post('/user', userController.createUser);

app.get('/categories', validateJWT, catController.getAll);
app.post('/categories', validateJWT, catController.createCat);
app.get('/post', validateJWT, postController.getAll);
app.post('/post', validateJWT, postController.createPost);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
