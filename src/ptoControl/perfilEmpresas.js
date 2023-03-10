//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madenterprisedb from '#Config/database.js';
//-- Importamos las funciones de operaciones de las Empresas para interactuar con la base de datos.
import { darseBajaEmpresadb } from '../db/operacionesEmpresasdb.js';

//-- Creamos el Punto de Control para configurar el Perfil de las Empresas.
const perfilEmpresas = async (req, res) => {

    //-- Cambio de Correo Electrónico por otro.
    const { email, password } = req.body;
    //-- Función para darse de baja por parte de la Empresa.
    darseBajaEmpresadb
    (
        madenterprisedb,
        {email: email}
    );

    return res.status(202).send('Empresa dada de baja definitivamente de MAD Enterprise');

}

//-- Exportamos la configuración del Perfil de las Empresas para unificarlo con el resto de rutas.
export default perfilEmpresas;