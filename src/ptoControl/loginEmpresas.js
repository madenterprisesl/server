//-- Importamos la conexión con la base de datos poder establecer diferentes operaciones con ella.
import madenterprisedb from '#Config/database.js';

//-- Creamos el Punto de Control para configurar el inicio de sesión de las Empresas.
const loginEmpresas = async (req, res) => {

    //-- Introducimos los campos para Iniciar Sesión como Empresa.
    const { email, password } = req.body;
    //-- Comprobamos que el email introducido existe y se encuentra en la base de datos.
    madenterprisedb.getConnection( (error) => {
        if(error) throw error;
        madenterprisedb.query('SELECT * FROM empresas WHERE email = ?', email, (error, rows) => {
            if(error) throw error;
            if(rows[0] == undefined) {
                res.status(401).send('Correo Electrónico incorrecto');
            }
        });
    });
    //-- Comprobamos que la contraseña introducida existe y se encuentra en la base de datos.
    madenterprisedb.getConnection( (error) => {
        if(error) throw error;
        madenterprisedb.query('SELECT * FROM empresas WHERE password = ?', password, (error, rows) => {
            if(error) throw error;
            if(rows[0] == undefined) {
                res.status(401).send('Contraseña incorrecta');
            }else {
                return res.status(202).send(`Sesión Iniciada con el Email ${email}`);
            }
        });
    });
}

//-- Exportamos la configuración de inicio de sesión de las Empresas para unificarlo con el resto de rutas.
export default loginEmpresas;