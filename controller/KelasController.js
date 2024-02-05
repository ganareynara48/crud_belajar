const conn = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.allKelas = (req, res) => {
    const _getKelas = "SELECT * FROM kelas WHERE deleted_at IS NULL";
    allDataKelas = conn.query(_getKelas, (err, results) => {
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

exports.insertKelas = async (req, res) => {
    try {
        const { nama } = req.body;

        if ( nama == null ) {

            res.status(500).send({
                "success": false,
                "message": 'Nama Kelas Tidak Boleh Kosong',
                "data": null
            });
            
        }

        const dataKelas = {
            id: uuidv4(), 
            nama: nama,
            created_at: new Date(),
            updated_at: new Date()
        }

        const data = await conn.query(`INSERT INTO kelas (id, nama, created_at, updated_at) VALUES (?, ?, ?, ?)`,
        [uuidv4(), nama, new Date(), new Date()]);

        if (!data) {
            res.status(404).send({
                "success": false,
                "message": 'Data kosong',
                "data": null
            });
        }

        res.status(201).send({
            "success": true,
            "message": 'Data Kelas Berhasil Di Inputkan',
            "data": dataKelas
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

exports.updateKelas = async (req, res) => {
    try {
        const { id, nama_upd } = req.body;

        if ( id == null && nama_upd == null) {

            res.status(500).send({
                "success": false,
                "message": 'ID tidak diketahui',
                "data": null
            });
            
        }

        const dataKelas = {
            id: id,
            nama_upd: nama_upd, 
            updated_at: new Date()
        }

        // Update data in MySQL asynchronously
        const data = await conn.query(`UPDATE kelas SET nama = ?, updated_at = ? WHERE id = ?`,
        [nama_upd, new Date(), id]);

        if (!data) {
            res.status(404).send({
                "success": false,
                "message": 'Data kosong',
                "data": null
            });
        }

        res.status(201).send({
            "success": true,
            "message": 'Data Kelas Berhasil Update Data!',
            "data": dataKelas
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error update data',
            error
        });
    }
}

exports.deletetKelas = async (req, res) => {
    try {
        const { id } = req.body;

        if ( id == null) {

            res.status(500).send({
                "success": false,
                "message": 'ID tidak diketahui',
                "data": null
            });
            
        }

        // Update data in MySQL asynchronously
        const data = await conn.query(`UPDATE kelas SET deleted_at = ? WHERE id = ?`,
        [new Date(), id]);

        if (!data) {
            res.status(404).send({
                "success": false,
                "message": 'Data kosong',
                "data": null
            });
        }

        res.status(201).send({
            "success": true,
            "message": 'Data Berhasil Di Hapus!',
            "data": {
                id
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error delete data',
            error
        });
    }
}