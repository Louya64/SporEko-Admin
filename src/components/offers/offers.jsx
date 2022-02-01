import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import BooleanNumField from "../BooleanNumField";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	ReferenceField,
	EditButton,
	ShowButton,
	Edit,
	SimpleForm,
	TextInput,
	NumberInput,
} from "react-admin";

export const OfferList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.title} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_offer" />
					<TextField source="creation_date" />
					{/* <ReferenceField source="id_user_seller" reference="users">
						<TextField source="pseudo" />
					</ReferenceField> */}
					{/* <TextField source="picture1" /> */}
					<TextField source="title" />
					<TextField source="description" />
					<ReferenceField source="id_sport" reference="sports">
						<TextField source="name" />
					</ReferenceField>
					{/* <ReferenceField source="id_gender" reference="genders">
						<TextField source="name" />
					</ReferenceField>
					<BooleanNumField source="is_child" />
					<ReferenceField source="id_category" reference="categories">
						<TextField source="name" />
					</ReferenceField> */}
					<ReferenceField source="id_item" reference="items">
						<TextField source="name" />
					</ReferenceField>
					{/* <ReferenceField source="id_brand" reference="brands">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_textile" reference="textiles">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_size" reference="sizes">
						<>
							<TextField source="size_int" />/
							<TextField source="size_eu" />/
							<TextField source="size_uk" />/
							<TextField source="age_child" />
						</>
					</ReferenceField> */}
					{/* <ReferenceField source="id_color1" reference="colors">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_color2" reference="colors">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_condition" reference="conditions">
						<TextField source="name" />
					</ReferenceField> */}
					<NumberField source="price" />
					{/* <NumberField source="weight" /> */}
					{/* <ReferenceField source="id_user_buyer" reference="users">
						<TextField source="pseudo" />
					</ReferenceField> */}
					{/* <TextField source="purchase_date" />
					<NumberField source="hand_delivery" /> */}
					<BooleanNumField source="is_archived" />
					<BooleanNumField source="is_draft" />
					<EditButton />
					<ShowButton />
				</Datagrid>
			)}
		</List>
	);
};

const OfferTitle = ({ record }) => {
	return <span>Annonces {record ? `"${record.name}"` : ""}</span>;
};

export const OfferEdit = (props) => (
	<Edit title={<OfferTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_offer" />
			<TextInput disabled source="creation_date" />
			<TextInput disabled source="title" />
			<TextInput disabled source="description" />
		</SimpleForm>
	</Edit>
);
