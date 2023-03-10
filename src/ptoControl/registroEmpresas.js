//-- Importamos el componente para cifrar las contraseñas.
import {hash} from 'bcrypt';
//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madenterprisedb from '#Config/database.js';
//-- Importamos las funciones de operaciones de las Empresas para interactuar con la base de datos.
import {registrarEmpresadb} from '../db/operacionesEmpresasdb.js';
//-- Importamos la función que genera el ID aleatoriamente.
import {generarIDrandom} from '../randomIDs/generarIDRandom.js';
//-- Importar la cte que cifra de sal o SALT en inglés.
import {SALT} from '#Ctes/salt.js';

//-- Creamos el Punto de Control para configurar el registro de las Empresas.
const registroEmpresas = async (req, res) => {
    
    //-- Introducimos los campos para Registrarse como Cliente.
    const { nombre, cif, email, password, confirmPassword, tiposoc } = req.body;
    //-- Consulta del email introducido por si ya existía en la base de datos.
    madenterprisedb.getConnection( (error) => {
        if(error) throw error;
        madenterprisedb.query('SELECT * FROM empresas WHERE email = ?', email, (error, rows) => {
            if(error) throw error;
            if(rows[0] !== undefined) {
                res.status(409).send('Lo siento, el Correo Electrónico introducido\nya está en uso en MAD Enterprise');
            }
        });
    });
    //-- Generación del ID aleatorio.
    const idEmpresa = generarIDrandom() * 3;
    //-- Comprobamos que la Contraseña metida y la confirmación de la Contraseña son iguales.
    if(password !== confirmPassword) return res.status(401).send('Introduce la misma contraseña en ambos campos');
    //-- Configuramos el sistema para cifrar la contraseña metida.
    const passwordCifrada = await hash(password, SALT);
    //-- Registramos el Cliente en la base de datos de MAD Shop.
    registrarEmpresadb
    (
        madenterprisedb, 
        {idEmpresa: idEmpresa, nombre: nombre, cif: cif, email: email, password: passwordCifrada, tiposoc: tiposoc}
    );
    return res.status(201).send('Empresa registrada con éxito.\n¡Bienvenido a MAD Enterprise!');

};

//-- Exportamos la configuración de registro de las Empresas para unificarlo con el resto de rutas.
export default registroEmpresas;