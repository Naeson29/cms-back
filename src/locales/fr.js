const addText = 'Ajouter';
const updateText = 'Modifier';
const cancelText = 'Annuler';
const closeText = 'Fermer';
const deleteText = 'Supprimer';

export default {
    commons: {
        add: 'Ajouter',
        back: 'Retour',
    },
    authentication: {

    },
    sidebar: {
        home: 'Accueil',
        user: 'Utilisateurs',
        publication: 'Publications',
        planning: 'Planning',
    },
    default: {
        title: {
            index: 'Titre de la page',
        },
    },
    user: {
        title: {
            index: 'Utilisateurs',
            create: 'Nouvel utilisateur',
            update: 'Modifier l\'utilisateur',
            show: 'Fiche utilisateur',
            password: 'Modification du mot de passe',
        },
        destroy: 'Voulez-vous vraiment supprimer cet utilisateur ?',
        form: {
            titles: {
            },
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
            newPassword: {
                label: 'Nouveau mot de passe',
            },
            oldPassword: {
                label: 'Ancien mot de passe',
            },
            confirmation: {
                label: 'Confirmation',
                placeholder: 'Confirmation du mot de passe',
            },
            image: {
                complement: 'Ajouter une photo',
                error: 'Vous ne pouvez ajouter qu\'une seule photo',
            },
        },
        list: {
            inputSearch: 'Prénom et/ou nom...',
            selectOrder: {
                first_name: 'Prénom',
                last_name: 'Nom',
                date: 'Date de création',
            },
        },
    },
    publication: {
        title: {
            index: 'Publications',
            create: 'Nouvelle publication',
            update: 'Modifier la publication',
            show: 'Détail de la publication',
        },
        destroy: 'Voulez-vous vraiment supprimer cette publication ?',
        form: {
            titles: {
            },
            title: {
                label: 'Titre',
                placeholder: 'Titre de la publication...',
            },
            content: {
                label: 'Texte',
                placeholder: 'Texte de la publication...',
            },
            published: {
                label: 'Visibilité',
                options: {
                    textOn: 'Publiée',
                    textOff: 'Non publiée',
                },
            },
            images: {
                complement: 'Ajouter une ou plusieurs photos',
                error: 'Vous pouvez ajouter 4 photos maximum',
            },
        },
        list: {
            published: 'Publiée',
            notPublished: 'Non publiée',
            inputSearch: 'Titre, contenu...',
            selectOrder: {
                title: 'Titre',
                date: 'Date de création',
            },
        },
        card: {
            createdBy: 'Crée par',
            on: 'le',
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
        orderSelect: {
            descending: 'Ordre décroissant',
            ascending: 'Ordre croissant',
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
        required: 'Le champ est obligatoire',
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
    selectMultiple: {
        allItemsAreSelected: 'Tout est sélectionné',
        clearSearch: 'Effacer la recherche',
        clearSelected: 'Effacer la sélection',
        noOptions: 'Aucune option',
        search: 'Recherche',
        selectAll: 'Tout sélectionner',
        selectAllFiltered: 'Tout sélectionner (Filtrés)',
        selectSomeItems: 'Sélectionner...',
        create: 'Créer',
    },
    errors: {
        oldPassword: 'L\'ancien mot de passe est incorrect',
    },
};
