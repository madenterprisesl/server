//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madshopdb from '#Config/database.js';

//-- Creamos el Punto de Control para configurar el Perfil de los Clientes.
const perfilClientes = async (req, res) => {

    //-- Introducción de nuevos datos por parte del Cliente.
    const { nombre, apellidos, direccion, poblacion, region, pais, cp, genero } = req.body;

    //-- Función que actualiza los Datos del perfil del Cliente en base de datos.
    actualizarDatosClientedb();

    //-- Cambio de Correo Electrónico por otro.
    const { email } = req.body;

    //-- Función que actualiza el Correo Electrónico del perfil del Cliente en base de datos.
    actualizarEmailClientedb();

    //-- Cambio de Contraseña por otra.
    const { viejaPassword, nuevaPassword, confirmPassword } = req.body;

    //-- Función que actualiza la Contraseña del perfil del Cliente en base de datos.
    actualizarPasswordClientedb();

    //-- Función para darse de baja.
    darseDeBaja();

}

//-- Exportamos la configuración del Perfil de los Clientes para unificarlo con el resto de rutas.
export default perfilClientes;