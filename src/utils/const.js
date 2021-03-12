import i18n from '../locales/i18n';

export const colors = {
    primary_color : '#3765af'
}

export const defaultLoadParams = {
    limit: 40,
    order: {
        column: 'first_name',
    }
}

//Date
export const DATE_FORMAT     = 'DD/MM/YYYY';

//Notifications forms
export const NOTIFICATION    = {
    error : {
        label         : 'Le titre est requis',
        title         : 'Le titre est requis',
        text          : 'Le texte est requis',
        image         : 'L\'image est requise',
        extension     : 'n\'est pas un fichier valide',
        size          : 'dépasse la taille autorisée',
        lastName      : 'Le nom est requis',
        firstName     : 'Le prénom est requis',
        email         : 'L\'adresse email est requise',
        password      : 'Le mot de passe est requis / mention "moyen" minimum',
        emailType     : 'L\'adresse email n\'est pas au bon format (exemple@gmail.com)',
        start         : 'La date de début est requise',
        end           : 'La date de fin est requise',
    },
    code : {
        '001' : 'Un autre utilisateur utlise cette adresse email'
    },
    success : {
        content : 'Le contenu a bien été enregistré'
    }
};
