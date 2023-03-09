//-- Importamos el componente que comprueba que los campos introducidos por el miembro de
//-- MAD Shop se han introducido correctamente.
import {check} from 'express-validator';

//-- Creamos la función de validación para cuando las Empresas se registren.
function validarRegistroEmpresas(nombre, cif, email, password, req) {
    
    //-- Validamos el nombre de la Empresa.
    check(nombre, req)
        .notEmpty()
        .isLowercase()
        .isUppercase()
        .isLength({min: 3, max: 50})
        .run(req);

    //-- Validamos el CIF de la Empresa.
    check(cif, req)
        .notEmpty()
        .isAlphanumeric()
        .run(req);

    //-- Validamos el email de la Empresa.
    check(email, req)
        .normalizeEmail()
        .isEmail()
        .notEmpty()
        .bail().blacklist()
        .bail().exists()
        .run(req);

    //-- Validamos la contraseña de la Empresa.
    check(password, req)
        .notEmpty()
        .isLength({min: 15, max: 100})
        .isAlphanumeric()
        .isLowercase()
        .isUppercase()
        .isStrongPassword()
        .run(req);
}

//-- Exportamos la validación de las Empresas al registrarse para unificarlo con el resto de rutas.
export {validarRegistroEmpresas};