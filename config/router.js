const express = require('express');
const routes  = express.Router();

//panggil controller
const MahasiswaController   = require('../controller/MahasiswaController');
const KelasController       = require('../controller/KelasController');

// Add routes

//route mahasiswa
routes.get('/mhs/all', MahasiswaController.allMhs);
routes.post('/mhs/insert', MahasiswaController.insertMhs);
routes.post('/mhs/update', MahasiswaController.updateMhs);
routes.post('/mhs/delete', MahasiswaController.deletetMhs);

//route kelas
routes.get('/kelas/all', KelasController.allKelas);
routes.post('/kelas/insert', KelasController.insertKelas);
routes.post('/kelas/update', KelasController.updateKelas);
routes.post('/kelas/delete', KelasController.deletetKelas);

module.exports = routes;