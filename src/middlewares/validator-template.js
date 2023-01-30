// import { check, validationResult } from 'express-validator';
import checkAPIs from 'express-validator';
const { check, validationResult } = checkAPIs;
export const validatorTemplate = async(req, res, next) => {
    await check('template').not().isEmpty().withMessage('El template es requerido').run(req);
    await check('variables')
        .optional()
        .isArray()
        .withMessage('Las variables deben de estar en una lista de strings')
        .run(req);
    await check('title')
        .not()
        .isEmpty()
        .withMessage('El titulo del template es requerido')
        .matches(/^[\w]+(?:-[\w]+)*$/)
        .withMessage(
            'El nombre debe caracterizarse por: `texto-texto` en caso cuente con mas de una palabra, no tildes, no `ñ` cambiar por `ni` año -> anio'
        )
        .run(req);
    await check('app').not().isEmpty().withMessage('El nombre de la app es requerido').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = { errors: errors.array() };
        next(err);
    } else {
        next();
    }
};