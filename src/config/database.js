//-- Importamos la versión 2 de la Tecnología MySQL, que tiene mejores características y más rango de actuación,
//-- para conectarnos a la base de datos de MAD Enterprise.
import mySQL from 'mysql2';
//-- Importamos la configuración del entorno ENV para poder usar su información.
import '#Config/env.js';

//-- Creamos la conexión con la base de datos de MAD Enterprise y la establecemos de forma dinámica.
const madenterprisedb = mySQL.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USUARIO,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.PUERTO_DB
});

//-- Exportamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
export default madenterprisedb;