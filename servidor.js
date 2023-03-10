//-- Importamos la configuración del entorno ENV para poder usar su información.
import '#Config/env.js';
//-- Importamos la Tecnología Express para crear el servidor de MAD Enterprise basado en Express.
import servidor from 'express';
//-- Importamos la Tecnología para proteger las cabeceras de la conexión Cliente - Servidor.
import helmet from 'helmet';
//-- Importamos todas las rutas de MAD Enterprise.
import rutasGET from '#Routes/GET.routes.js';
import rutasPOST from '#Routes/POST.routes.js';
import rutasDELETE from '#Routes/DELETE.routes.js';
import rutasPATCH from '#Routes/PATCH.routes.js';

//-- Creamos el servidor de MAD Enterprise.
const madenterprise = servidor();

//-- Creamos la protección de cabeceras para establecer la conexión Cliente - Servidor con seguridad.
madenterprise.use(helmet());

//-- Desactivación del x-powered-by para evitar a los actores maliciosos dar pistas sobre la pila de software en uso,
//-- informándoles sobre los algoritmos de ataque que probablemente tengan éxito.
madenterprise.disable('x-powered-by');

//-- Creamos los Middleswares para poder introducir JSON en el Body.
madenterprise.use(servidor.json());

//-- Definimos las rutas del E-Commerce MAD Shop.
madenterprise.use(rutasGET, rutasPOST, rutasDELETE, rutasPATCH);

//-- Servidor de MAD Shop escuchando en el puerto correspondiente.
madenterprise.listen(process.env.PUERTO, () => {
    console.log('Servidor de MAD Enterprise escuchando en el puerto', process.env.PUERTO);
});