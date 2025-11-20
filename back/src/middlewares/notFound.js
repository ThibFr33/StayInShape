
module.exports = (req, res) => {
    res.status(404).json({
        message : "La page demandée n'existe pas, merci de vérifier votre demande!"
    });
}