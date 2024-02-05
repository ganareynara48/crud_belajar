const conn = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.allMhs = (req, res) => {
    const _getMhs = "SELECT * FROM mahasiswa WHERE deleted_at IS NULL";
    allDataMhs = conn.query(_getMhs, (err, results) => {
        if (err) {
            console.log(err);
            res.error(err.sqlMessage.res);
        } else {
            res.status(200).json({
                "success": true,
                "message": "Sukses Menampilkan Data",
                "data": results
            });
        }
    });
}

exports.insertMhs = async (req, res) => {
    try {
        const { nama, jurusan } = req.body;

        if ( nama == null || jurusan == null ) {

            res.status(500).send({
                "success": false,
                "message": 'Nama Tidak Boleh Kosong',
                "data": null
            });
            
        }

        const dataMhs = {
            id: uuidv4(), 
            nama: nama, 
            jurusan: jurusan, 
            created_at: new Date(),
            updated_at: new Date()
        }

        const data = await conn.query(`INSERT INTO mahasiswa (id, nama, jurusan, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
        [uuidv4(), nama, jurusan, new Date(), new Date()]);

        if (!data) {
            res.status(404).send({
                "success": false,
                "message": 'Data kosong',
                "data": null
            });
        }

        res.status(201).send({
            "success": true,
            "message": 'Data Berhasil Di Inputkan',
            "data": dataMhs
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error create data',
            error
        });
    }
}