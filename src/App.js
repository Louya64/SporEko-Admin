import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
	ColorList,
	ColorEdit,
	ColorCreate,
} from "./components/otherEntities/colors";
import {
	AthleticList,
	AthleticEdit,
	AthleticCreate,
} from "./components/otherEntities/athletics";
import {
	BrandList,
	BrandEdit,
	BrandCreate,
} from "./components/otherEntities/brands";
import {
	ConditionList,
	ConditionEdit,
	ConditionCreate,
} from "./components/otherEntities/conditions";
import {
	CountryList,
	CountryEdit,
	CountryCreate,
} from "./components/otherEntities/countries";
import {
	DelivererList,
	DelivererEdit,
	DelivererCreate,
} from "./components/deliverers/deliverers";
import {
	SportList,
	SportEdit,
	SportCreate,
} from "./components/otherEntities/sports";
import {
	TextileList,
	TextileEdit,
	TextileCreate,
} from "./components/otherEntities/textiles";
import { UserList, UserEdit, UserCreate } from "./components/users/users";
import Dashboard from "./components/Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./components/Layout";
import ColorLensIcon from "@material-ui/icons/ColorLens";
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
			name="athletics"
			list={AthleticList}
			edit={AthleticEdit}
			create={AthleticCreate}
			icon={WcIcon}
		/>
		<Resource
			name="brands"
			list={BrandList}
			edit={BrandEdit}
			create={BrandCreate}
			icon={WcIcon}
		/>
		<Resource
			name="conditions"
			list={ConditionList}
			edit={ConditionEdit}
			create={ConditionCreate}
			icon={WcIcon}
		/>
		<Resource
			name="countries"
			list={CountryList}
			edit={CountryEdit}
			create={CountryCreate}
			icon={WcIcon}
		/>
		<Resource
			name="deliverers"
			list={DelivererList}
			edit={DelivererEdit}
			create={DelivererCreate}
			icon={WcIcon}
		/>
		<Resource
			name="sports"
			list={SportList}
			edit={SportEdit}
			create={SportCreate}
			icon={WcIcon}
		/>
		<Resource
			name="textiles"
			list={TextileList}
			edit={TextileEdit}
			create={TextileCreate}
			icon={WcIcon}
		/>
		{/*  */}
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
