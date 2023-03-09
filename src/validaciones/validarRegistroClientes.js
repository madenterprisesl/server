//-- Importamos el componente que comprueba que los campos introducidos por el miembro de
//-- MAD Shop se han introducido correctamente.
import {check} from 'express-validator';

//-- Creamos la función de validación para cuando los Clientes se registren.
function validarRegistroClientes(email, password, nombre, apellidos, direccion, poblacion, region, pais, cp, req) {
    
    //-- Validamos el email del Cliente.
    check(email, req)
        .normalizeEmail()
        .isEmail()
        .notEmpty()
        .bail().blacklist()
        .bail().exists()
        .run(req);

    //-- Validamos la contraseña del Cliente.
    check(password, req)
        .notEmpty()
        .isLength({min: 15, max: 100})
        .isAlphanumeric()
        .isLowercase()
        .isUppercase()
        .isStrongPassword()
        .run(req);

    //-- Validamos el nombre, la dirección, la población, la región y el país del Cliente.
    check(nombre, direccion, poblacion, region, pais, req)
        .notEmpty()
        .isLowercase()
        .isUppercase()
        .isLength({min: 3, max: 50})
        .run(req);

    //-- Validamos los apellidos del Cliente.
    check(apellidos, req)
        .notEmpty()
        .isLowercase()
        .isUppercase()
        .isLength({min: 3, max: 100})
        .run(req);

    //-- Validamos el C.P del Cliente.
    check(cp, req)
        .notEmpty()
        .isPostalCode()
        .run(req);
}

//-- Exportamos la validación de los Clientes al registrarse para unificarlo con el resto de rutas.
export {validarRegistroClientes};