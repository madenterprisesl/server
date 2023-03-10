//-- Importamos la versión 2 de la Tecnología MySQL, que tiene mejores características y más rango de actuación,
//-- para conectarnos a la base de datos de MAD Enterprise.
import mySQL from 'mysql2';

//-- Creamos la función para registrarse como Cliente en la base de datos de MAD Enterprise.
const registrarClientedb = async (madenterprisedb, data) => {

    //-- Instrucción para registrarse en la base de datos.
    let instruccionRegistrarse = 
        "INSERT INTO clientes (idCliente, email, password, nombre, apellidos, direccion, poblacion, region, pais, cp, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    //-- Configuración del formato de los datos introducidos.
    let formatoInstruccionRegistrarse = mySQL.format(instruccionRegistrarse, [data.idCliente, data.email, data.password, data.nombre, data.apellidos, data.direccion, data.poblacion, data.region, data.pais, data.cp, data.genero]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de insertar datos en la base de datos.
            madenterprisedb.query(formatoInstruccionRegistrarse);
        }
    });
}

//-- Creamos la función para Actualizar los datos de la base de datos de MAD Enterprise.
const actualizarDatosClientedb = async (madenterprisedb, data) => {

    //-- Variables usadas para actualizar los datos del Cliente de la base de datos.
    let instruccionActualizarDatos = "UPDATE clientes SET nombre = ? OR apellidos = ? OR genero = ?";
    let formatoinstruccionActualizarDatos = mySQL.format(instruccionActualizarDatos, [data.nombre, data.apellidos, data.genero]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de actualizar los datos de la base de datos.
            madenterprisedb.query(formatoinstruccionActualizarDatos);
        }
    });
}

//-- Creamos la función para Actualizar la Localización del Cliente de la base de datos de MAD Enterprise.
const actualizarLocalizacionClientedb = async (madenterprisedb, data) => {

    //-- Variables usadas para actualizar la Localización del Cliente de la base de datos.
    let instruccionActualizarDatos = "UPDATE clientes SET direccion = ? OR poblacion = ? OR region = ? OR pais = ? OR cp = ?";
    let formatoinstruccionActualizarDatos = mySQL.format(instruccionActualizarDatos, [data.direccion, data.poblacion, data.region, data.pais, data.cp]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de actualizar los datos de la base de datos.
            madenterprisedb.query(formatoinstruccionActualizarDatos);
        }
    });
}

//-- Creamos la función para Actualizar el Correo Electrónico del Cliente de la base de datos de MAD Enterprise.
const actualizarEmailClientedb = async (madenterprisedb, data) => {

    //-- Variables usadas para actualizar la Localización del Cliente de la base de datos.
    let instruccionActualizarDatos = "UPDATE clientes SET email = ?";
    let formatoinstruccionActualizarDatos = mySQL.format(instruccionActualizarDatos, [data.email]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de actualizar los datos de la base de datos.
            madenterprisedb.query(formatoinstruccionActualizarDatos);
        }
    });
}

//-- Creamos la función para Actualizar el Correo Electrónico del Cliente de la base de datos de MAD Enterprise.
const actualizarPasswordClientedb = async (madenterprisedb, data) => {

    //-- Variables usadas para actualizar la Localización del Cliente de la base de datos.
    let instruccionActualizarDatos = "UPDATE clientes SET password = ?";
    let formatoinstruccionActualizarDatos = mySQL.format(instruccionActualizarDatos, [data.password]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de actualizar los datos de la base de datos.
            madenterprisedb.query(formatoinstruccionActualizarDatos);
        }
    });
}

//-- Creamos la función para Borrar los datos de la base de datos de MAD Enterprise.
const darseBajaClientedb = async (madenterprisedb, data) => {
    //-- Variables usadas para borrar los datos de la base de datos.
    let instruccionDarseBajaCliente = "DELETE FROM clientes WHERE email = ?";
    let formatoinstruccionDarseBajaCliente = mySQL.format(instruccionDarseBajaCliente, [data.email]);
    //-- Establecer la conexión dinámica.
    await madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de borrar los datos de la base de datos.
            madenterprisedb.query(formatoinstruccionDarseBajaCliente);
        }
    });
}

//-- Exportamos las funciones.
export {registrarClientedb, actualizarDatosClientedb, actualizarLocalizacionClientedb, actualizarEmailClientedb, actualizarPasswordClientedb, darseBajaClientedb};