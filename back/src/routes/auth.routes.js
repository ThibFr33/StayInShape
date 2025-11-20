const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const {registerRules, loginRules} =  require('../middlewares/validators/auth.validator');

//déclarer les routes (login, register)
const router = Router();
//méthode d'envoi, ('route', middleware, controller.action)
router.post('/register', registerRules, authController.register);
router.post('/login', loginRules, authController.login);

module.exports = router;