import frenchMessages from "ra-language-french";

export default {
	simple: {
		action: {
			close: "Fermer",
			resetViews: "Réinitialiser des vues",
		},
		"create-post": "Nouveau post",
	},
	...frenchMessages,
	resources: {
		posts: {
			name: "Article |||| Articles",
			fields: {
				average_note: "Note moyenne",
				body: "Contenu",
				comments: "Commentaires",
				commentable: "Commentable",
				commentable_short: "Com.",
				created_at: "Créé le",
				notifications: "Destinataires de notifications",
				nb_view: "Nb de vues",
				password: "Mot de passe (si protégé)",
				pictures: "Photos associées",
				published_at: "Publié le",
				teaser: "Description",
				tags: "Catégories",
				title: "Titre",
				views: "Vues",
				authors: "Auteurs",
			},
		},
		colors: {
			name: "Couleur |||| Couleurs",
			fields: {
				name: "Nom",
				color_code: "Code couleur (hex)",
				color: "Couleur",
			},
		},
		colissimos: {
			name: "Colissimo |||| Colissimos",
			fields: {
				name: "Nom",
				weight: "Poids",
				price: "Prix",
			},
		},
		genders: {
			name: "Genre |||| Genres",
			fields: {
				name: "Nom",
			},
		},
		users: {
			name: "Utilisateur |||| Utilisateurs",
			fields: {
				lastname: "Nom",
				firstname: "Prénom",
				adress: "Adresse",
				zipcode: "Code postal",
				city: "Ville",
				email: "Email",
				password: "Mot de passe",
				hash_password: "Mot de passe haché",
				picture: "Photo",
				isadmin: "Admin",
				isarchived: "Archivé",
				id_gender: "Genre",
				adress_complement: "Complément d'adresse",
				id_sportif_style: "Style de sportif",
				birthday: "Date de naissance",
				phone: "N° téléphone",
				creation_date: "Incrit depuis",
				pseudo: "Pseudo",
				authentified_by_facebook: "Authentifié avec Facebook",
			},
		},
	},
	post: {
		list: {
			search: "Recherche",
		},
		form: {
			summary: "Résumé",
			body: "Contenu",
			miscellaneous: "Extra",
			comments: "Commentaires",
		},
		edit: {
			title: 'Article "%{title}"',
		},
	},
	comment: {
		list: {
			about: "Au sujet de",
		},
	},
	user: {
		list: {
			search: "Recherche",
		},
		form: {
			summary: "Résumé",
			security: "Sécurité",
		},
		edit: {
			title: 'Utilisateur "%{title}"',
		},
	},
};
