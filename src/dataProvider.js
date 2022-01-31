import { stringify } from "query-string";
import axios from "axios";
axios.defaults.withCredentials = true;

const apiUrl = process.env.REACT_APP_URL;

export default {
	getList: async (resource, params) => {
		const query = {
			sortBy: JSON.stringify(params.sort.field),
			order: JSON.stringify(params.sort.order),
			firstItem: JSON.stringify(
				(params.pagination.page - 1) * params.pagination.perPage
			),
			limit: JSON.stringify(params.pagination.perPage),
		};

		const dataLength = await axios.get(`${apiUrl}/${resource}`).then((res) => {
			return res.data.length;
		});

		const url = `${apiUrl}/${resource}?${stringify(query)}`;

		return axios
			.get(url, {
				withCredentials: true,
			})
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				return {
					data: data.map((elem) => {
						return {
							id: elem[Object.keys(elem)[0]],
							...elem,
						};
					}),
					total: dataLength,
				};
			})
			.catch((err) => alert(err.response.data.message));
	},

	getOne: (resource, params) => {
		console.log(params.id);
		console.log(params);
		return axios
			.get(`${apiUrl}/${resource}/${params.id}`, { withCredentials: true })
			.then((recordFound) => {
				return {
					data: {
						id: recordFound[Object.keys(recordFound)[0]],
						...recordFound,
					},
				};
			})
			.catch((err) => alert(err.response.data.message));
	},

	getMany: (resource, params) => {
		const query = {
			ids: JSON.stringify({ id: params.ids }),
		};

		return axios
			.get(`${apiUrl}/${resource}?${stringify(query)}`, {
				withCredentials: true,
			})
			.then((res) => res.data)
			.then((recordsFound) => {
				return {
					data: recordsFound.map((elem) => {
						return {
							id: elem[Object.keys(elem)[0]],
							...elem,
						};
					}),
					total: recordsFound.length,
				};
			})

			.catch((err) => alert(err.response.data.message));
	},

	create: (resource, params) => {
		console.log(params);
		return axios({
			method: "post",
			url: `${apiUrl}/${resource}`,
			data: params.data,
			withCredentials: true,
		})
			.then((recordCreated) => {
				console.log(recordCreated);
				return {
					data: {
						id: recordCreated[Object.keys(recordCreated)[0]],
						...recordCreated,
					},
				};
			})
			.catch((err) => alert(err.response.data.message));
	},

	update: (resource, params) =>
		axios({
			method: "put",
			url: `${apiUrl}/${resource}/${params.id}`,
			data: params.data,
			withCredentials: true,
		})
			.then((recordUpdated) => {
				return {
					data: recordUpdated.data,
				};
			})
			.catch((err) => {
				alert(err.response.data.message);
				return {
					data: { id: params.id },
				};
			}),

	delete: (resource, params) =>
		axios({
			method: "delete",
			url: `${apiUrl}/${resource}/${params.id}`,
			withCredentials: true,
		})
			.then((recordDeleted) => ({
				data: recordDeleted.data,
			}))
			.catch((err) => alert(err.response.data.message)),

	deleteMany: (resource, params) => {
		const query = {
			ids: JSON.stringify({ id: params.ids }),
		};
		return axios({
			method: "delete",
			url: `${apiUrl}/${resource}?${stringify(query)}`,
			withCredentials: true,
		})
			.then((res) => {
				return { data: res.data };
			})
			.catch((err) => alert(err.response.data.message));
	},
};
