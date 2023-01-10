// Importamos nuestros modulos
import ClientSQL from './sql.js';
import { options } from './options/mariaDB.js';

/* Utilizando phpMyAdmin vamos a crear una base de datos llamada coderhouse en MariaDB y el comando seria: 
----- CREATE DATABASE coderhouse;
*/

// Instanciamos la clase ClientSQL
const sql = new ClientSQL(options)

// Punto 1
sql.crearTabla()
    .then(() => {
        console.log("Tabla creada")

        // Punto 2
        const articulos = [
            { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24},
            { nombre: 'Harina', codigo: 'CD-34', precio: 18.80, stock: 45},
            { nombre: 'DDL', codigo: 'EF-56', precio: 32.60, stock: 16},
            { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34},
            { nombre: 'Crema', codigo: 'CR-77', precio: 68, stock: 24}
        ]
        return sql.insertarArticulos(articulos)
    })
    .then(() => {
        // Punto 3
        console.log("Articulos insertados con exito");
        return sql.listarArticulos();
    })
    .then(articulos => {
        // Punto 4
        console.log("Articulos listados")
        console.table(articulos)
    })