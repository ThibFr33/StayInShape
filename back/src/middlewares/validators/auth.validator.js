const { body } = require('express-validator');

//validation d'un enregistrement 
exports.registerRules = [
    body('email').isEmail().withMessage('email incorrect'),
    body('password').isLength({min:8}).withMessage('minimum 8 caracters')
];

//validation de connexion
exports.loginRules = [
    body('email').isEmail(),
    body('password').notEmpty()
]