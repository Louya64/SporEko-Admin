import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
	ColorList,
	ColorEdit,
	ColorCreate,
} from "./components/otherEntities/colors";
import {
	ColissimoList,
	ColissimoEdit,
	ColissimoCreate,
} from "./components/otherEntities/colissimos";
import {
	GenderList,
	GenderEdit,
	GenderCreate,
} from "./components/otherEntities/genders";
import { UserList, UserEdit, UserCreate } from "./components/users/users";
import Dashboard from "./components/Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./components/Layout";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import SendIcon from "@material-ui/icons/Send";
import WcIcon from "@material-ui/icons/Wc";
import UserIcon from "@material-ui/icons/Group";

const App = () => (
	<Admin
		dashboard={Dashboard}
		authProvider={authProvider}
		dataProvider={dataProvider}
		i18nProvider={i18nProvider}
		layout={Layout}
	>
		<Resource
			name="colors"
			list={ColorList}
			edit={ColorEdit}
			create={ColorCreate}
			icon={ColorLensIcon}
		/>
		<Resource
			name="colissimos"
			list={ColissimoList}
			edit={ColissimoEdit}
			create={ColissimoCreate}
			icon={SendIcon}
		/>
		<Resource
			name="genders"
			list={GenderList}
			edit={GenderEdit}
			create={GenderCreate}
			icon={WcIcon}
		/>
		<Resource
			name="users"
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
			icon={UserIcon}
		/>
	</Admin>
);

export default App;
