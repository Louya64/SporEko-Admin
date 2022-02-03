import axios from "axios";

export default {
	login: async ({ username, password }) => {
		const data = await axios({
			method: "post",
			url: `${process.env.REACT_APP_URL}/login`,
			data: {
				email: username,
				password: password,
			},
			withCredentials: true,
		}).then((res) => {
			if (res.data.admin) {
				const user = res.data;
				return user;
			}
			return false;
		});
		if (!sessionStorage.getItem("username")) {
			sessionStorage.setItem("username", data.pseudo);
			sessionStorage.setItem("avatar", data.picture);
			sessionStorage.setItem("role", data.admin === 1 ? "admin" : "");
		}
		return data;
	},
	logout: () => {
		sessionStorage.removeItem("username");
		sessionStorage.removeItem("avatar");
		sessionStorage.removeItem("role");
		return Promise.resolve();
	},
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			sessionStorage.removeItem("username");
			sessionStorage.removeItem("avatar");
			sessionStorage.removeItem("role");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	checkAuth: () => {
		return sessionStorage.getItem("role") === "admin"
			? Promise.resolve()
			: Promise.reject();
	},
	getPermissions: () => Promise.resolve(),
	getIdentity: () =>
		Promise.resolve({
			id: sessionStorage.getItem("username"),
			fullName: sessionStorage.getItem("username"),
			avatar: sessionStorage.getItem("avatar"),
		}),
};
