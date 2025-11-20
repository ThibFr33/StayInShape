const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const SALT_ROUNDS = 10;

//s'enregistrer

async function register({email, password, username, age, sexe, height}){
    //utiliser bcrypt pour hasher le password
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    //créer un user et stocker le mdp hashed et pas le normal !
    return Users.create({email, password: hash, username, age, sexe, height})

}
//validation des données de connexion (credentials)
async function validateCredentials(email, password){
    const user = await Users.findOne({ where: {email} });
    //si pas de compte je stop l'exécution de la fonction
    if (!user) return null;
    //comparer les mdp
    const isValid = await bcrypt.compare(password, user.password);
    // si comparaison ok , renvoyer isValid sinon renvoyer null !
    return isValid ? user : null ;
}

// génerer un token
function generateToken(user) {
    return jwt.sign(
        {sub: user.id},
        process.env.JWT_TOKEN, 
        { expiresIn: '2h'}
    )
}

module.exports = { register, generateToken, validateCredentials};