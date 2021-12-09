const { check } = require('express-validator');

exports.signupValidator = [
    check ('username,').not().isEmpty().trim().withMessage('All fields required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalide email'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must be ar least 6 characters long')
];