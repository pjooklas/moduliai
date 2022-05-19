// const f = require("./dir/fnkc.js");
// const f1 = require("./dir/fnkc.js");
// console.log(f === f1);

// const rez = f.suma(1, 2);
// console.log(rez);

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'prog',
    password: 'Prog123456',
    database: 'adresu_knyga'
});

conn.connect();

conn.query('SELECT * from zmones', (error, results) => {
    if (error) throw error;
    console.log('The solution is: ', results);
});




conn.end();