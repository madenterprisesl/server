//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madshopdb from '#Config/database.js';
//-- Importamos las funciones de operaciones de los Clientes para interactuar con la base de datos.
import {registrarClientedb} from '../db/operacionesClientesdb.js';
//-- Importamos la función que genera el ID aleatoriamente.
import {generarIDrandom} from '../randomIDs/generarIDRandom.js';
//-- Importar la cte que cifra de sal o SALT en inglés.
import {SALT} from '#Ctes/salt.js';

//-- Creamos el Punto de Control para configurar el registro de los Clientes.
const registroClientes = async (req, res) => {
    
    //-- Introducimos los campos para Registrarse como Cliente.
    const { email, password, confirmPassword, nombre, apellidos, direccion, poblacion, region, pais, cp, genero } = req.body;
    //-- Consulta del email introducido por si ya existía en la base de datos.
    madshopdb.getConnection( (error) => {
        if(error) throw error;
        madshopdb.query('SELECT * FROM clientes WHERE email = ?', email, (error, rows) => {
            if(error) throw error;
            if(rows[0] !== undefined) {
                res.status(409).send('Lo siento, el Correo Electrónico introducido\nya está en uso en MAD Shop');
            }
        });
    });
    //-- Generación del ID aleatorio.
    const idCliente = generarIDrandom() * 2;
    //-- Comprobamos que la Contraseña metida y la confirmación de la Contraseña son iguales.
    if(password !== confirmPassword) return res.status(401).send('Introduce la misma contraseña en ambos campos');
    //-- Registramos el Cliente en la base de datos de MAD Shop.
    registrarClientedb
    (
        madshopdb, 
        {idCliente: idCliente, email: email, password: password, nombre: nombre, apellidos: apellidos, direccion: direccion,
        poblacion: poblacion, region: region, pais: pais, cp: cp, genero: genero}
    );
    return res.status(201).send('Cliente registrado con éxito.\n¡Bienvenido a MAD Shop!');
}; 

//-- Exportamos la configuración de registro de los Clientes para unificarlo con el resto de rutas.
export default registroClientes;