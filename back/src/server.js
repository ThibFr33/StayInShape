require('dotenv').config();
//importation de l'app
const app = require('./app')
//config du port
const PORT = process.env.PORT;
//gestion d'erreur si pas de port ou port !=
if (!PORT) {
    console.log("PORT inconnu, merci de compléter le fichier .env");
    process.exit(1)
}
//
app.listen(PORT, ()=>{
    console.log(`Serveur bien lancé sur le port ${PORT}`);
    
})