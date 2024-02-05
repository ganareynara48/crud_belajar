const express = require('express');
const routes  = express.Router();

//panggil controller
const MahasiswaController = require('../controller/MahasiswaController');

// Add routes
routes.get('/mhs/all', MahasiswaController.allMhs);
routes.post('/mhs/insert', MahasiswaController.insertMhs);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;