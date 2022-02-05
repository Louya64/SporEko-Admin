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
		colors: {
			name: "Couleur |||| Couleurs",
			fields: {
				name: "Nom",
				color_code: "Code couleur (hex)",
				color: "Couleur",
			},
		},
		athletics: {
			name: "Style de sportif |||| Styles de sportif",
			fields: {
				name: "Nom",
			},
		},
		brands: {
			name: "Marque |||| Marques",
			fields: {
				name: "Nom",
			},
		},
		conditions: {
			name: "État |||| États",
			fields: {
				name: "Nom",
			},
		},
		countries: {
			name: "Pays |||| Pays",
			fields: {
				name: "Nom",
			},
		},
		deliverers: {
			name: "Livreur |||| Livreurs",
			fields: {
				name: "Nom",
			},
		},
		sports: {
			name: "Sport |||| Sports",
			fields: {
				name: "Nom",
			},
		},
		textiles: {
			name: "Matière |||| Matières",
			fields: {
				name: "Nom",
			},
		},
		deliverer_prices: {
			name: "Prix des livreurs |||| Prix des livreurs",
			fields: {
				name: "Nom",
				min_weight: "Poids min (en grammes)",
				max_weight: "Poids max (en grammes)",
				price: "Prix",
				id_deliverer: "Livreur",
			},
		},
		items: {
			name: "Article |||| Articles",
			fields: {
				name: "Nom",
				id_category: "Catégorie",
				id_size_type: "Type de taille",
			},
		},
		categories: {
			name: "Catégorie |||| Catégories",
			fields: {
				name: "Nom",
			},
		},
		size_types: {
			name: "Type de taille |||| Types de taille",
			fields: {
				name: "Nom",
			},
		},
		genders: {
			name: "Genre |||| Genres",
			fields: {
				adult_name: "Nom pour un adulte",
				child_name: "Nom pour un enfant",
			},
		},
		sizes: {
			name: "Taille |||| Tailles",
			fields: {
				id_gender: "Genre",
				name: "Nom",
				is_child: "Enfant ?",
				id_size_type: "Type de taille",
			},
		},
		offers: {
			name: "Annonce |||| Annonces",
			fields: {
				creation_date: "Date de création",
				id_user_seller: "Vendeur",
				picture1: "Photo 1",
				title: "Titre",
				description: "Description",
				id_sport: "Sport",
				id_gender: "Genre",
				is_child: "Enfant ?",
				id_category: "Catégorie",
				id_item: "Article",
				id_brand: "Marque",
				id_textile: "Matière",
				id_size: "Taille",
				id_color1: "Couleur 1",
				id_color2: "Couleur 2",
				id_condition: "État",
				price: "Prix",
				weight: "Poids",
				id_user_buyer: "Acheteur",
				purchase_date: "Date d'achat",
				hand_delivery: "Remise en main propre ?",
				is_archived: "Archivé ?",
				is_draft: "Brouillon ?",
				picture2: "Photo 2",
				picture3: "Photo 3",
				picture4: "Photo 4",
				picture5: "Photo 5",
				picture6: "Photo 6",
				picture7: "Photo 7",
				picture8: "Photo 8",
				picture9: "Photo 9",
				picture10: "Photo 10",
				picture11: "Photo 11",
				picture12: "Photo 12",
				picture13: "Photo 13",
				picture14: "Photo 14",
				picture15: "Photo 15",
				picture16: "Photo 16",
				picture17: "Photo 17",
				picture18: "Photo 18",
				picture19: "Photo 19",
				picture20: "Photo 20",
			},
		},
		users: {
			name: "Utilisateur |||| Utilisateurs",
			fields: {
				lastname: "Nom",
				firstname: "Prénom",
				address: "Adresse",
				zipcode: "Code postal",
				city: "Ville",
				email: "Email",
				hash_password: "Mot de passe",
				picture: "Photo",
				is_admin: "Admin ?",
				is_archived: "Archivé ?",
				is_professional: "Professionnel ?",
				id_gender: "Genre",
				id_country: "Pays",
				address_complement: "Complément d'adresse",
				id_athletic: "Style de sportif",
				birthday: "Date de naissance",
				phone: "N° téléphone",
				creation_date: "Date d'inscription",
				pseudo: "Pseudo",
			},
		},
	},
};
