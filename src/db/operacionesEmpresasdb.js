//-- Importamos la versión 2 de la Tecnología MySQL, que tiene mejores características y más rango de actuación,
//-- para conectarnos a la base de datos de MAD Shop.
import mySQL from 'mysql2';

//-- Creamos la función para registrarse como Empresa en la base de datos de MAD Shop.
function registrarEmpresadb(madshopdb, data) {

    //-- Instrucción para registrarse en la base de datos.
    let instruccionRegistrarse = 
        "INSERT INTO empresas (idEmpresa, nombre, cif, email, password, tiposoc) VALUES (?, ?, ?, ?, ?, ?)";
    //-- Configuración del formato de los datos introducidos.
    let formatoInstruccionRegistrarse = mySQL.format(instruccionRegistrarse, [data.idEmpresa, data.nombre, data.cif, data.email, data.password, data.tiposoc]);
    //-- Establecer la conexión dinámica.
    madshopdb.getConnection(function(error, madshopdb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de insertar datos en la base de datos.
            madshopdb.query(formatoInstruccionRegistrarse, function(error) {
                if(error) throw error;
                madshopdb.release();
            });
        }

    });
}

//-- Creamos la función para Actualizar los datos de la base de datos de MAD Shop.
function actualizardb(madshopdb, data) {

    //-- Ctes usadas para crear emails de forma aleatoria para la base de datos.
    const radomLetras = Math.random().toString(36).substring(7);
    const newEmail = `${radomLetras}@outlook.com`;
    //-- Variables usadas para actualizar los datos de la base de datos.
    let actualizarquery = "UPDATE empresas SET email = ? WHERE id = ?";
    let query = mySQL.format(actualizarquery, [newEmail, data.id]);
    //-- Establecer la conexión dinámica.
    madshopdb.getConnection(function(error, madshopdb) {
        if(error) throw error;
        //-- Establecer la configuración de actualizar los datos de la base de datos.
        madshopdb.query(query, function(error) {
            if(error) throw error;
        });
    });
}

//-- Creamos la función para Borrar los datos de la base de datos de MAD Shop.
function borrardb(madshopdb, data) {
    //-- Variables usadas para borrar los datos de la base de datos.
    let borrarquery = "DELETE FROM empresas WHERE id = ?";
    let query = mySQL.format(borrarquery, [data.id]);
    //-- Establecer la conexión dinámica.
    madshopdb.getConnection(function(error, madshopdb) {
        if(error) throw error;
        //-- Establecer la configuración de borrar los datos de la base de datos.
        madshopdb.query(query, function(error) {
            if(error) throw error;
        });
    });
}

//-- Exportamos las funciones.
export {registrarEmpresadb, actualizardb, borrardb};