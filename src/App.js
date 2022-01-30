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
import {
	Deliverer_priceList,
	Deliverer_priceEdit,
	Deliverer_priceCreate,
} from "./components/deliverers/deliverer_prices";
import {
	ItemList,
	ItemEdit,
	ItemCreate,
} from "./components/otherEntities/items";
import { CategoryList } from "./components/otherEntities/categories";
import { Size_typeList } from "./components/otherEntities/size_types";
import { GenderList } from "./components/otherEntities/genders";
import {
	SizeList,
	SizeEdit,
	SizeCreate,
} from "./components/otherEntities/sizes";
import { UserList, UserEdit, UserCreate } from "./components/users/users";
import Dashboard from "./components/Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./components/Layout";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import WcIcon from "@material-ui/icons/Wc";
// import UserIcon from "@material-ui/icons/Group";
import CloseIcon from "@material-ui/icons/Close";

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
			icon={CloseIcon}
		/>
		<Resource
			name="textiles"
			list={TextileList}
			edit={TextileEdit}
			create={TextileCreate}
			icon={WcIcon}
		/>
		<Resource
			name="deliverer_prices"
			list={Deliverer_priceList}
			edit={Deliverer_priceEdit}
			create={Deliverer_priceCreate}
			icon={WcIcon}
		/>
		<Resource
			name="items"
			list={ItemList}
			edit={ItemEdit}
			create={ItemCreate}
			icon={WcIcon}
		/>
		<Resource name="categories" list={CategoryList} icon={CloseIcon} />
		<Resource name="size_types" list={Size_typeList} icon={CloseIcon} />
		<Resource name="genders" list={GenderList} icon={CloseIcon} />
		<Resource
			name="sizes"
			list={SizeList}
			edit={SizeEdit}
			create={SizeCreate}
			icon={WcIcon}
		/>
		{/*  */}
		<Resource
			name="users"
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
			icon={CloseIcon}
		/>
	</Admin>
);

export default App;
