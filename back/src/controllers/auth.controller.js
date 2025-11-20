const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    console.log('test-register');
    //récupérer les erreurs générés par registerRules
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //stop si jamais payload invalide
        return res.status(400).json({
            success:false,
            errors: errors.array()
        })
    }
    console.log('register rules ok');
    try {
        //get les infos et enregistrer en db
        const user = await authService.register(req.body);
        return res.status(201).json({
            success: true,
            message: "Utilisateur crée avec succès",
            data: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                success: false,
                message: "Clé unique mail déjà utilisée",
                data: null
            })
        }
        return res.status(500).json({
            success: false,
            message: "Erreur interne",
            data:null
        })
    }
};


exports.login = async (req, res) => {
    console.log('test-login');
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //stop si jamais payload invalide
        return res.status(400).json({
            success:false,
            errors: errors.array()
        })
    }

    //utiliser notre fonction qui check les credentials
    const user = await authService.validateCredentials(req.body.email, req.body.password);
    if(!user){
        return res.status(401).json({
            success: false,
            message:"identifiants incorrects",
            data:null
        })
    }
    console.log("identification ok");
    const token = authService.generateToken(user);
    return res.status(201).json({
        success:true,
        message:"connexion réussie",
        data: {token}
    })
    
};