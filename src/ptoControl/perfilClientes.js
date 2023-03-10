//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madenterprisedb from '#Config/database.js';
//-- Importamos las funciones de operaciones de los Clientes para interactuar con la base de datos.
import { actualizarDatosClientedb, actualizarLocalizacionClientedb, 
    actualizarEmailClientedb, actualizarPasswordClientedb, darseBajaClientedb } from '../db/operacionesClientesdb.js';

//-- Creamos el Punto de Control para configurar el Perfil de los Clientes.
const perfilClientes = async (req, res) => {

    /* //-- Introducción de nuevos datos por parte del Cliente.
    const { nombre, apellidos, genero } = req.body;

    //-- Función que actualiza los Datos del perfil del Cliente en base de datos.
    actualizarDatosClientedb
    (
        madshopdb,
        {nombre: nombre, apellidos: apellidos, genero: genero}
    );

    //-- Introducción de nueva localización del Cliente.
    const { direccion, poblacion, region, pais, cp } = req.body;

    //-- Función que actualiza la Nueva Localización del Cliente en base de datos.
    actualizarLocalizacionClientedb
    (
        madshopdb,
        {direccion: direccion, poblacion: poblacion, region: region, pais: pais, cp: cp}
    ); */

    //-- Cambio de Correo Electrónico por otro.
    const { email, password } = req.body;

    /* //-- Función que actualiza el Correo Electrónico del perfil del Cliente en base de datos.
    actualizarEmailClientedb
    (
        madshopdb,
        {email: email}
    );

    //-- Cambio de Contraseña por otra.
    const { viejaPassword, nuevaPassword, confirmPassword } = req.body;

    //-- Función que actualiza la Contraseña del perfil del Cliente en base de datos,
    //-- consultando la vieja contraseña y escribiendo dos veces la nueva.
    //-- Comprobamos que la contraseña introducida existe y se encuentra en la base de datos.
    madshopdb.getConnection( (error) => {
        if(error) throw error;
        madshopdb.query('SELECT * FROM clientes WHERE password = ?', viejaPassword, (error, rows) => {
            if(error) throw error;
            if(rows[0] == undefined) {
                res.status(401).send('Contraseña incorrecta');
            }
        });
    });
    //-- Comprobamos que la confirmación de la contraseña es igual a la nueva contraseña.
    if(nuevaPassword !== confirmPassword) return res.status(401).send('Introduce la misma contraseña en ambos campos');
    actualizarPasswordClientedb
    (
        madshopdb,
        {password: nuevaPassword}
    ); */
        
    //-- Función para darse de baja por parte del Cliente.
    darseBajaClientedb
    (
        madenterprisedb,
        {email: email}
    );

    return res.status(202).send('Cliente dado de baja definitivamente de MAD Enterprise');

}

//-- Exportamos la configuración del Perfil de los Clientes para unificarlo con el resto de rutas.
export default perfilClientes;