'use strict'
var express = require('express');
var socketio = require('socket.io');
var Connection = require('tedious').Connection;
const http = require('http');
var soap = require('soap');
var fs = require('fs');
var path = require('path');
const sql = require('mssql');
var resp = "vacio";
var result = [];

var html_send = "";
var error_sunat = 0;
const RUC = "20563254174";

let pool, request = null;
const config = {
    user: 'sa',
    password: 'masterkey',
    server: '25.15.243.250', // You can use 'localhost\\instance' to connect to named instance
    database: 'DBFREST',
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};


sql.on('error', err => {
    if (err) throw err;
});

function start() {
    (async function () {
        try {
            console.log("Conexion realizada");
            pool = await sql.connect(config);
            request = pool.request();
        } catch (err) {
            console.log(err);
        }
    })();
}

start();

function inicio() {

    (async function () {
        try {
            var value = 0;
            let result1 = await request.query(`SELECT TOP 5 SERIE,NUMERO,SERIEFAC,NUMFACTURA 
                                    FROM TIQUETSCAB 
                                    WHERE NUMERO > 145350 
                                    ORDER BY NUMERO ASC;`);


            //console.log(result1);
            if (result1.rowsAffected > 0)
                //////////////// await hola(result1);
                console.log(result1);
            else
                console.log("Esperando nuevos envios..." + new Date());
            // Stored procedure

        } catch (err) {
            console.log(err);
        }
    })();
}

setInterval(() => {
    inicio()
}, 10 * 1000);