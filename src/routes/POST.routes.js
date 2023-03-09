//-- Importamos el componente para enrrutar las páginas de MAD Shop.
import express from 'express';
//-- Importamos la página que hace posible el registro de los Clientes.
import registroClientes from '#PtoControl/registroClientes.js';
//-- Importamos la página que hace posible el registro de las Empresas.
import registroEmpresas from '#PtoControl/registroEmpresas.js';
//-- Importamos la página que hace posible el inicio de sesión de los Clientes.
import loginClientes from '#PtoControl/loginClientes.js';
//-- Importamos la página que hace posible el inicio de sesión de las Empresas.
import loginEmpresas from '#PtoControl/loginEmpresas.js';
//-- Importamos la página que hace posible la Configuración del Perfil de los Clientes.
import perfilClientes from '#PtoControl/perfilClientes.js';
//-- Importamos la página que hace posible la Configuración del Perfil de las Empresas.
import perfilEmpresas from '#PtoControl/perfilEmpresas.js';

//-- Creamos las rutas de MAD Shop con método POST.
const rutasPOST = express.Router();

//-- Ruta POST para registrarse como Cliente.
rutasPOST.post('/registrarse/cliente', registroClientes);

//-- Ruta POST para registrarse como Empresa.
rutasPOST.post('/registrarse/empresa', registroEmpresas);

//-- Ruta POST para Iniciar Sesión como Cliente.
rutasPOST.post('/login/cliente', loginClientes);

//-- Ruta POST para Iniciar Sesión como Empresa.
rutasPOST.post('/login/empresa', loginEmpresas);

//-- Ruta POST para Configurar el Perfil como Cliente.
rutasPOST.post('/perfil-cliente', perfilClientes);

//-- Ruta POST para Configurar el Perfil como Empresa.
rutasPOST.post('/perfil-empresa', perfilEmpresas);

//-- Exportamos las rutas POST para unificar el E-Commerce MAD Shop.
export default rutasPOST;