//-- Importamos la versión 2 de la Tecnología MySQL, que tiene mejores características y más rango de actuación,
//-- para conectarnos a la base de datos de MAD Shop.
import mySQL from 'mysql2';

//-- Creamos la función para registrarse como Cliente en la base de datos de MAD Shop.
const registrarClientedb = async (madshopdb, data) => {

    //-- Instrucción para registrarse en la base de datos.
    let instruccionRegistrarse = 
        "INSERT INTO clientes (idCliente, email, password, nombre, apellidos, direccion, poblacion, region, pais, cp, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    //-- Configuración del formato de los datos introducidos.
    let formatoInstruccionRegistrarse = mySQL.format(instruccionRegistrarse, [data.idCliente, data.email, data.password, data.nombre, data.apellidos, data.direccion, data.poblacion, data.region, data.pais, data.cp, data.genero]);
    //-- Establecer la conexión dinámica.
    await madshopdb.getConnection(function(error, madshopdb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de insertar datos en la base de datos.
            madshopdb.query(formatoInstruccionRegistrarse);
        }
    });
}

//-- Creamos la función para Actualizar los datos de la base de datos de MAD Shop.
const actualizardb = async (madshopdb, data) => {

    //-- Ctes usadas para crear emails de forma aleatoria para la base de datos.
    const radomLetras = Math.random().toString(36).substring(7);
    const newEmail = `${radomLetras}@outlook.com`;
    //-- Variables usadas para actualizar los datos de la base de datos.
    let actualizarquery = "UPDATE clientes SET email = ? WHERE id = ?";
    let query = mySQL.format(actualizarquery, [newEmail, data.id]);
    //-- Establecer la conexión dinámica.
    await madshopdb.getConnection(function(error, madshopdb) {
        if(error) throw error;
        //-- Establecer la configuración de actualizar los datos de la base de datos.
        madshopdb.query(query, function(error) {
            if(error) throw error;
        });
    });
}

//-- Creamos la función para Borrar los datos de la base de datos de MAD Shop.
const borrardb = async (madshopdb, data) => {
    //-- Variables usadas para borrar los datos de la base de datos.
    let borrarquery = "DELETE FROM clientes WHERE id = ?";
    let query = mySQL.format(borrarquery, [data.id]);
    //-- Establecer la conexión dinámica.
    await madshopdb.getConnection(function(error, madshopdb) {
        if(error) throw error;
        //-- Establecer la configuración de borrar los datos de la base de datos.
        madshopdb.query(query, function(error) {
            if(error) throw error;
        });
    });
}

//-- Exportamos las funciones.
export {registrarClientedb, actualizardb, borrardb};