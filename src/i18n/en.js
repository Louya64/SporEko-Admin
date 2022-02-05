import englishMessages from "ra-language-english";

export const messages = {
	simple: {
		action: {
			close: "Close",
			resetViews: "Reset views",
		},
		"create-post": "New post",
	},
	...englishMessages,
	resources: {
		posts: {
			name: "Post |||| Posts",
			fields: {
				average_note: "Average note",
				body: "Body",
				comments: "Comments",
				commentable: "Commentable",
				commentable_short: "Com.",
				created_at: "Created at",
				notifications: "Notifications recipients",
				nb_view: "Nb views",
				password: "Password (if protected post)",
				pictures: "Related Pictures",
				published_at: "Published at",
				teaser: "Teaser",
				tags: "Tags",
				title: "Title",
				views: "Views",
				authors: "Authors",
			},
		},
		users: {
			name: "User |||| Users",
			fields: {
				lastname: "Lastname",
				firstname: "Firstname",
				address: "Address",
				zipcode: "Zipcode",
				city: "City",
				email: "Email",
				hash_password: "Password",
				picture: "Picture",
				is_admin: "Admin ?",
				is_archived: "Archived ?",
				is_professional: "Professional ?",
				id_gender: "Gender",
				id_country: "Country",
				adress_complement: "Address complement",
				id_athletic: "Athletic style",
				birthday: "Birthday",
				phone: "Phone",
				creation_date: "Registration date",
				pseudo: "Pseudo",
			},
		},
	},
};

export default messages;
