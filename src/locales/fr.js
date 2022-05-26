const addText = 'Ajouter';
const updateText = 'Modifier';
const cancelText = 'Annuler';
const closeText = 'Fermer';
const deleteText = 'Supprimer';

export default {
    authentication: {

    },
    default: {
        title: {
            index: 'Titre de la page',
        },
    },
    user: {
        title: {
            index: 'Utilisateurs',
            create: 'Ajouter un nouvel utilisateur',
            update: 'Modifier l\'utilisateur',
            show: 'Fiche utilisateur',
        },
        destroy: 'Voulez-vous vraiment supprimer cet utilisateur ?',
        form: {
            first_name: {
                label: 'Prénom',
                placeholder: 'Pierre...',
            },
            last_name: {
                label: 'Nom',
                placeholder: 'Richard...',
            },
            email: {
                label: 'Adresse email',
                placeholder: 'exemple@mail.fr...',
            },
            password: {
                label: 'Mot de passe',
                placeholder: '*************',
            },
            confirmation: {
                label: 'Confirmation',
                placeholder: 'Confirmation du mot de passe',
            },
            image: {
                label: 'Photo',
                complement: 'Ajouter une photo',
                error: 'Vous ne pouvez ajouter qu\'une seule photo',
            },
        },
    },
    publication: {
        title: {
            index: 'Publications',
            create: 'Ajouter une publication',
            update: 'Modifier la publication',
            show: 'Détail de la publication',
        },
        destroy: 'Voulez-vous vraiment supprimer cette publication ?',
        form: {
            title: {
                label: 'Titre',
                placeholder: 'Titre de la publication...',
            },
            content: {
                label: 'Contenu',
                placeholder: 'Contenu de la publication...',
            },
            published: {
                label: 'Visibilité',
                options: {
                    textOn: 'Publiée',
                    textOff: 'Non publiée',
                },
            },
            images: {
                label: 'Photos',
                complement: 'Ajouter une ou plusieurs photos',
                error: 'Vous pouvez ajouter 4 photos maximum',
            },
        },
    },
    unauthorized: {
        title: 'Page non autorisée',
    },
    list: {
        results: 'résultat(s)',
    },
    form: {
        buttons: {
            add: addText,
            update: updateText,
            cancel: cancelText,
        },
    },
    filter: {
        titles: {
            search: 'Rechercher',
            order: 'Classer',
            filter: 'Filtrer',
        },
        buttons: {
            apply: 'Appliquer',
            close: closeText,
        },
    },
    modal: {
        buttons: {
            delete: deleteText,
            cancel: cancelText,
        },
    },
    upload: {
        volume: 'La photo est trop volumineuse (Maximum 2Mo)',
        buttons: {
            delete: 'Tout supprimer',
        },
    },
    validator: {
        required: 'Le champ "{{label}}" est obligatoire',
        email: 'L\'adresse email invalide',
        password: {
            length: 'Minimum 8 caractères pour le mot de passe',
            same: 'Les mots de passe ne sont pas identiques',
        },
        image: {
            volumeOne: 'L\'image est trop volumineuse',
            volumeMany: 'Une ou plusieurs images sont trop volumineuses',
        },
    },
};
