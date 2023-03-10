//-- Importamos la versión 2 de la Tecnología MySQL, que tiene mejores características y más rango de actuación,
//-- para conectarnos a la base de datos de MAD Enterprise.
import mySQL from 'mysql2';

//-- Creamos la función para registrarse como Empresa en la base de datos de MAD Enterprise.
function registrarEmpresadb(madenterprisedb, data) {

    //-- Instrucción para registrarse en la base de datos.
    let instruccionRegistrarse = 
        "INSERT INTO empresas (idEmpresa, nombre, cif, email, password, tiposoc) VALUES (?, ?, ?, ?, ?, ?)";
    //-- Configuración del formato de los datos introducidos.
    let formatoInstruccionRegistrarse = mySQL.format(instruccionRegistrarse, [data.idEmpresa, data.nombre, data.cif, data.email, data.password, data.tiposoc]);
    //-- Establecer la conexión dinámica.
    madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) {
            throw error;
        }else {
            //-- Establecer la configuración de insertar datos en la base de datos.
            madenterprisedb.query(formatoInstruccionRegistrarse);
        }
    });
}

//-- Creamos la función para Actualizar los datos de la base de datos de MAD Enterprise.
function actualizardb(madenterprisedb, data) {

    //-- Ctes usadas para crear emails de forma aleatoria para la base de datos.
    const radomLetras = Math.random().toString(36).substring(7);
    const newEmail = `${radomLetras}@outlook.com`;
    //-- Variables usadas para actualizar los datos de la base de datos.
    let actualizarquery = "UPDATE empresas SET email = ? WHERE id = ?";
    let query = mySQL.format(actualizarquery, [newEmail, data.id]);
    //-- Establecer la conexión dinámica.
    madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) throw error;
        //-- Establecer la configuración de actualizar los datos de la base de datos.
        madenterprisedb.query(query);
    });
}

//-- Creamos la función para Borrar los datos de la base de datos de MAD Enterprise.
function darseBajaEmpresadb(madenterprisedb, data) {
    //-- Variables usadas para borrar los datos de la base de datos.
    let instruccionDarseBajaEmpresa = "DELETE FROM empresas WHERE email = ?";
    let formatoinstruccionDarseBajaEmpresa = mySQL.format(instruccionDarseBajaEmpresa, [data.email]);
    //-- Establecer la conexión dinámica.
    madenterprisedb.getConnection(function(error, madenterprisedb) {
        if(error) throw error;
        //-- Establecer la configuración de borrar los datos de la base de datos.
        madenterprisedb.query(formatoinstruccionDarseBajaEmpresa);
    });
}

//-- Exportamos las funciones.
export {registrarEmpresadb, actualizardb, darseBajaEmpresadb};