// import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";

const apiUrl = process.env.REACT_APP_URL;
let dataLength = 0;
// const cookies = sessionStorage.getItem("cookie");
// console.log(cookies);
// const httpClient = fetchUtils.fetchJson;

// const httpClient = (url, options = {}) => {
// 	if (!options.headers) {
// 		options.headers = new Headers({ Accept: "application/json" });
// 	}
// 	// add your own headers here
// 	options.headers.set("content-range", 10);
// 	return fetchUtils.fetchJson(url, options);
// };

export default {
	getList: async (resource, params) => {
		console.log(params.pagination);
		console.log(params.sort);
		// const { page, perPage } = params.pagination;
		// const { field, order } = params.sort;
		const query = {
			sortBy: JSON.stringify(params.sort.field),
			order: JSON.stringify(params.sort.order),
			firstItem: JSON.stringify(
				(params.pagination.page - 1) * params.pagination.perPage
			),
			limit: JSON.stringify(params.pagination.perPage),
			// filter: JSON.stringify(params.filter),
			// sort: JSON.stringify([field, order]),
			// range: JSON.stringify([(page - 1) * perPage, perPage]),
			// filter: JSON.stringify(params.filter),
		};
		console.log(`${apiUrl}/${resource}?${stringify(query)}`);
		// console.log("dfg");

		const dataLength = await axios.get(`${apiUrl}/${resource}`).then((res) => {
			console.log(res.data.length);
			return res.data.length;
		});
		// console.log("dfg");
		// const dataLength = await axios
		// 	.get(`${apiUrl}/${resource}`)
		// 	.then((res) => res.data.length);

		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		// console.log(url);

		return axios
			.get(url, { withCredentials: true })
			.then((res) => {
				console.log(res.data);
				return res.data;
			})
			.then((data) => {
				console.log(data);
				return {
					data: data.map((elem) => {
						return {
							id: elem[Object.keys(elem)[0]],
							...elem,
						};
					}),
					total: dataLength,
					// total: data.length,
				};
			})
			.catch((err) => alert(err.response.data.message));
	},

	// getList: (resource, params) => {
	// 	const { page, perPage } = params.pagination;
	// 	const { field, order } = params.sort;
	// 	const query = {
	// 		sort: JSON.stringify([field, order]),
	// 		range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
	// 		filter: JSON.stringify(params.filter),
	// 	};
	// 	const url = `${apiUrl}/${resource}?${stringify(query)}`;
	// 	console.log(url);

	// 	return httpClient(url).then(({ headers, json }) => {
	// 		console.log(headers);
	// 		return {
	// 			data: json,
	// 			total: parseInt(headers.get("content-range").split("/").pop(), 10),
	// 		};
	// 	});
	// },

	getOne: (resource, params) => {
		console.log(params.id);
		console.log(params);
		return axios
			.get(`${apiUrl}/${resource}/${params.id}`)
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
	// getOne: (resource, params) =>
	// 	httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
	// 		data: json,
	// 	})),

	getMany: (resource, params) => {
		const query = {
			ids: JSON.stringify({ id: params.ids }),
		};

		return axios
			.get(`${apiUrl}/${resource}?${stringify(query)}`)
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
	// getMany: (resource, params) => {
	// 	const query = {
	// 		filter: JSON.stringify({ id: params.ids }),
	// 	};
	// 	const url = `${apiUrl}/${resource}?${stringify(query)}`;
	// 	return httpClient(url).then(({ json }) => ({ data: json }));
	// },

	// getManyReference: (resource, params) => {
	// 	const { page, perPage } = params.pagination;
	// 	const { field, order } = params.sort;
	// 	const query = {
	// 		sort: JSON.stringify([field, order]),
	// 		range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
	// 		filter: JSON.stringify({
	// 			...params.filter,
	// 			[params.target]: params.id,
	// 		}),
	// 	};
	// 	const url = `${apiUrl}/${resource}?${stringify(query)}`;

	// 	return httpClient(url).then(({ headers, json }) => ({
	// 		data: json,
	// 		total: parseInt(headers.get("content-range").split("/").pop(), 10),
	// 	}));
	// },

	create: (resource, params) => {
		// params.data = { ...params.data, id: params.data.id_color };

		console.log(params);
		return axios({
			method: "post",
			url: `${apiUrl}/${resource}`,
			data: params.data,
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
	// create: (resource, params) =>
	// 	httpClient(`${apiUrl}/${resource}`, {
	// 		method: "POST",
	// 		body: JSON.stringify(params.data),
	// 	}).then(({ json }) => ({
	// 		data: { ...params.data, id: json.id },
	// 	})),

	update: (resource, params) =>
		axios({
			method: "put",
			url: `${apiUrl}/${resource}/${params.id}`,
			data: params.data,
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
	// update: (resource, params) =>
	// 	httpClient(`${apiUrl}/${resource}/${params.id}`, {
	// 		method: "PUT",
	// 		body: JSON.stringify(params.data),
	// 	}).then(({ json }) => ({ data: json })),

	// updateMany: (resource, params) => {
	// 	const query = {
	// 		filter: JSON.stringify({ id: params.ids }),
	// 	};
	// 	return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
	// 		method: "PUT",
	// 		body: JSON.stringify(params.data),
	// 	}).then(({ json }) => ({ data: json }));
	// },

	delete: (resource, params) =>
		axios({
			method: "delete",
			url: `${apiUrl}/${resource}/${params.id}`,
		})
			.then((recordDeleted) => ({
				data: recordDeleted.data,
			}))
			.catch((err) => alert(err.response.data.message)),
	// delete: (resource, params) =>
	// 	httpClient(`${apiUrl}/${resource}/${params.id}`, {
	// 		method: "DELETE",
	// 	}).then(({ json }) => ({ data: json })),

	deleteMany: (resource, params) => {
		const query = {
			ids: JSON.stringify({ id: params.ids }),
		};
		return axios({
			method: "delete",
			url: `${apiUrl}/${resource}?${stringify(query)}`,
		})
			.then((res) => {
				return { data: res.data };
			})
			.catch((err) => alert(err.response.data.message));
	},
	// deleteMany: (resource, params) => {
	// 	const query = {
	// 		filter: JSON.stringify({ id: params.ids }),
	// 	};
	// 	return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
	// 		method: "DELETE",
	// 	}).then(({ json }) => ({ data: json }));
	// },
};
