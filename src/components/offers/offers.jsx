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
	Edit,
	SimpleForm,
	TextInput,
	ReferenceInput,
	SelectInput,
	NumberInput,
	DateInput,
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
					<ReferenceField source="id_user_seller" reference="users">
						<TextField source="pseudo" />
					</ReferenceField>
					{/* <TextField source="picture1" /> */}
					<TextField source="title" />
					<TextField source="description" />
					<ReferenceField source="id_sport" reference="sports">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_gender" reference="genders">
						<TextField source="adult_name" />
					</ReferenceField>
					<BooleanNumField source="is_child" />
					<ReferenceField source="id_category" reference="categories">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_item" reference="items">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_brand" reference="brands">
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
					</ReferenceField>
					<ReferenceField source="id_color1" reference="colors">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_color2" reference="colors">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_condition" reference="conditions">
						<TextField source="name" />
					</ReferenceField>
					<NumberField source="price" />
					<NumberField source="weight" />
					<ReferenceField source="id_user_buyer" reference="users">
						<TextField source="pseudo" />
					</ReferenceField>
					<TextField source="purchase_date" />
					<NumberField source="hand_delivery" />
					<BooleanNumField source="is_archived" />
					<BooleanNumField source="is_draft" />
					<EditButton />
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
			<NumberInput label="id" source="id_offer" />
			<TextInput source="creation_date" />
			<ReferenceInput source="id_user_seller" reference="users">
				<SelectInput optionText="pseudo" />
			</ReferenceInput>
			{/* <TextInput source="picture1" /> */}
			<TextInput source="title" />
			<TextInput source="description" />
			<ReferenceInput source="id_sport" reference="sports">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput optionText="adult_name" />
			</ReferenceInput>
			<NumberInput source="is_child" />
			<ReferenceInput source="id_category" reference="categories">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_item" reference="items">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_brand" reference="brands">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_textile" reference="textiles">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_size" reference="sizes">
				<SelectInput optionText="size_eu" />
			</ReferenceInput>
			<ReferenceInput source="id_color1" reference="colors">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_color2" reference="colors">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_condition" reference="conditions">
				<SelectInput source="name" />
			</ReferenceInput>
			<NumberInput source="price" />
			<NumberInput source="weight" />
			<ReferenceInput source="id_user_buyer" reference="users">
				<SelectInput optionText="pseudo" />
			</ReferenceInput>
			<DateInput source="purchase_date" />
			<NumberInput source="hand_delivery" />
			<NumberInput source="is_archived" />
			<NumberInput source="is_draft" />
		</SimpleForm>
	</Edit>
);
