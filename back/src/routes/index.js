//importation du Router express
const { Router } = require('express');


//création du routeur
const router = Router();

router.use('/auth', require('./auth.routes'));



module.exports = router;