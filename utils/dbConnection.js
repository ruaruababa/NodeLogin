const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_login',
    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
});

module.exports = dbConnection.promise();