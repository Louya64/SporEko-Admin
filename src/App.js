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
import { OfferList, OfferEdit } from "./components/offers/offers";
import { UserList, UserEdit, UserCreate } from "./components/users/users";
import Dashboard from "./components/Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./components/Layout";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import WcIcon from "@material-ui/icons/Wc";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import FlagIcon from "@material-ui/icons/Flag";
import SendIcon from "@material-ui/icons/Send";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import EuroIcon from "@material-ui/icons/Euro";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import HeightIcon from "@material-ui/icons/Height";
import FormatSizeIcon from "@material-ui/icons/FormatSize";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ListIcon from "@material-ui/icons/List";

const App = () => {
	return (
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
				icon={SportsHandballIcon}
			/>
			<Resource
				name="brands"
				list={BrandList}
				edit={BrandEdit}
				create={BrandCreate}
				icon={SortByAlphaIcon}
			/>
			<Resource
				name="conditions"
				list={ConditionList}
				edit={ConditionEdit}
				create={ConditionCreate}
				icon={BrokenImageIcon}
			/>
			<Resource
				name="countries"
				list={CountryList}
				edit={CountryEdit}
				create={CountryCreate}
				icon={FlagIcon}
			/>
			<Resource
				name="deliverers"
				list={DelivererList}
				edit={DelivererEdit}
				create={DelivererCreate}
				icon={SendIcon}
			/>
			<Resource
				name="sports"
				list={SportList}
				edit={SportEdit}
				create={SportCreate}
				icon={SportsTennisIcon}
			/>
			<Resource
				name="textiles"
				list={TextileList}
				edit={TextileEdit}
				create={TextileCreate}
				icon={FilterVintageIcon}
			/>
			<Resource
				name="deliverer_prices"
				list={Deliverer_priceList}
				edit={Deliverer_priceEdit}
				create={Deliverer_priceCreate}
				icon={EuroIcon}
			/>
			<Resource
				name="items"
				list={ItemList}
				edit={ItemEdit}
				create={ItemCreate}
				icon={AddShoppingCartIcon}
			/>
			<Resource name="categories" list={CategoryList} icon={ArrowForwardIcon} />
			<Resource name="size_types" list={Size_typeList} icon={FormatSizeIcon} />
			<Resource name="genders" list={GenderList} icon={WcIcon} />
			<Resource
				name="sizes"
				list={SizeList}
				edit={SizeEdit}
				create={SizeCreate}
				icon={HeightIcon}
			/>
			<Resource
				name="offers"
				list={OfferList}
				edit={OfferEdit}
				icon={ListIcon}
			/>
			{/*  */}
			<Resource
				name="users"
				list={UserList}
				edit={UserEdit}
				create={UserCreate}
				icon={AccountCircleIcon}
			/>
		</Admin>
	);
};

export default App;
