import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	ReferenceField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	ReferenceInput,
	SelectInput,
} from "react-admin";

export const SizeList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_size" />
					<ReferenceField source="id_gender" reference="genders">
						<TextField source="name" />
					</ReferenceField>
					<NumberField source="is_child" />
					<ReferenceField source="id_size_type" reference="size_types">
						<TextField source="name" />
					</ReferenceField>
					<TextField source="size_int" />
					<TextField source="size_eu" />
					<TextField source="size_fr" />
					<TextField source="size_uk" />
					<TextField source="size_us" />
					<TextField source="size_foot" />
					<TextField source="size_chest" />
					<TextField source="size_pool" />
					<TextField source="size_jeans" />
					<TextField source="age_child" />
					<TextField source="height" />
					<TextField source="hand_turn" />
					<TextField source="size_glove" />
					<TextField source="crotch" />
					<TextField source="size_bike_inches" />
					<TextField source="size_bike" />
					<TextField source="size_wheel" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const SizeTitle = ({ record }) => {
	return <span>Tailles {record ? `"${record.name}"` : ""}</span>;
};

export const SizeEdit = (props) => (
	<Edit title={<SizeTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_size" />
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput source="name" />
			</ReferenceInput>
			<NumberInput source="is_child" />
			<ReferenceInput source="id_size_type" reference="size_types">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="size_int" />
			<TextInput source="size_eu" />
			<TextInput source="size_fr" />
			<TextInput source="size_uk" />
			<TextInput source="size_us" />
			<TextInput source="size_foot" />
			<TextInput source="size_chest" />
			<TextInput source="size_pool" />
			<TextInput source="size_jeans" />
			<TextInput source="age_child" />
			<TextInput source="height" />
			<TextInput source="hand_turn" />
			<TextInput source="size_glove" />
			<TextInput source="crotch" />
			<TextInput source="size_bike_inches" />
			<TextInput source="size_bike" />
			<TextInput source="size_wheel" />
		</SimpleForm>
	</Edit>
);

export const SizeCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput source="name" />
			</ReferenceInput>
			<NumberInput source="is_child" />
			<ReferenceInput source="id_size_type" reference="size_types">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="size_int" />
			<TextInput source="size_eu" />
			<TextInput source="size_fr" />
			<TextInput source="size_uk" />
			<TextInput source="size_us" />
			<TextInput source="size_foot" />
			<TextInput source="size_chest" />
			<TextInput source="size_pool" />
			<TextInput source="size_jeans" />
			<TextInput source="age_child" />
			<TextInput source="height" />
			<TextInput source="hand_turn" />
			<TextInput source="size_glove" />
			<TextInput source="crotch" />
			<TextInput source="size_bike_inches" />
			<TextInput source="size_bike" />
			<TextInput source="size_wheel" />
		</SimpleForm>
	</Create>
);
