const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator()
  .is()
  .min(8, ['8 caractères minimum'])
  .is()
  .max(25, '25 caractères maximum')
  .has()
  .uppercase([1], 'Doit contenir au moins une Majuscule')
  .has()
  .lowercase([1], 'Doit contenir une minuscule minimum')
  .has()
  .digits([1], 'Doit contenir un chiffre minimum')
  .has()
  .not()
  .spaces(false, 'Ne doit contenir aucun espace')
  .is()
  .not()
  .oneOf(
    ['Passw0rd', 'Password123', 'Qwerty123', 'Azerty123'],
    'Mot de passe interdit'
  );

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error:
        "Invalide! Le mot de passe doit faire entre 8 et 25 caractères et contenir au moins 1 Majuscule, 1 minuscule, 1 chiffre, sans espaces. Il se peut également que votre mot de passe fasse partie d'une liste refusée",
    });
  }
};
