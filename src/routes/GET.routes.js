//-- Importamos el componente para enrrutar las páginas de MAD Enterprise.
import express from 'express';

//-- Creamos las rutas de MAD Enterprise con método GET.
const rutasGET = express.Router();

//-- Ruta a Inicio.
rutasGET.get('/', (req,res) => {
    res.status(200).send('Estás en la sección de Inicio');
})
//-- Ruta a Contacto.
rutasGET.get('/contacto', (req,res) => {
    res.status(200).send('Estás en la sección de Contacto');
})

//-- Ruta a Empleo.
rutasGET.get('/empleo', (req,res) => {
    res.status(200).send('Estás en la sección de Empleo');
})

//-- Ruta a Sobre Nosotros.
rutasGET.get('/sobrenosotros', (req,res) => {
    res.status(200).send('Estás en la sección de Sobre Nosotros');
})

//-- Ruta a Categorias.
rutasGET.get('/categorias', (req,res) => {
    res.status(200).send('Estás en la sección de Categorias');
})

//-- Ruta a Iniciar Sesión.
rutasGET.get('/login', (req,res) => {
    res.status(200).send('Estás en la sección de Iniciar Sesión como Cliente o como Empresa');
})

//-- Ruta a Registrarse.
rutasGET.get('/registrarse', (req,res) => {
    res.status(200).send('Estás en la sección de Registrarse como Cliente o como Empresa');
})

//-- Exportamos las rutas GET para unificar el E-Commerce MAD Enterprise.
export default rutasGET;