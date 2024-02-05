var mysql      = require('mysql');

// Buat pool koneksi
const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mhs',
    waitForConnections: true,
    timeout: 'UTC+7'
    // connectionLimit: 10, // Jumlah maksimum koneksi dalam pool
    // queueLimit: 0, // Jumlah maksimum antrian koneksi saat koneksi maksimum dicapai
  });
  
  // Ambil koneksi dari pool
  conn.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      return;
    } else {
        console.log('DB Connected');
    }
  });

  //export koneksi
  module.exports = conn;