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
						<TextField source="adult_name" />
					</ReferenceField>
					<BooleanNumField source="is_child" />
					<ReferenceField source="id_size_type" reference="sizeTypes">
						<TextField source="name" />
					</ReferenceField>
					<TextField source="size_int" />
					<TextField source="size_eu" />
					<TextField source="size_fr" />
					<TextField source="size_uk" />
					<TextField source="size_us" />
					<TextField source="age_child" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const SizeTitle = ({ record }) => {
	return (
		<span>
			Tailles{" "}
			{record
				? `${record.size_int || ""} ${record.size_eu || ""} ${
						record.size_uk || ""
				  } ${record.age_child || ""}`
				: ""}
		</span>
	);
};

export const SizeEdit = (props) => (
	<Edit title={<SizeTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_size" />
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput optionText="adult_name" />
			</ReferenceInput>
			<NumberInput source="is_child" />
			<ReferenceInput source="id_size_type" reference="sizeTypes">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="size_int" />
			<TextInput source="size_eu" />
			<TextInput source="size_fr" />
			<TextInput source="size_uk" />
			<TextInput source="size_us" />
			<TextInput source="age_child" />
		</SimpleForm>
	</Edit>
);

export const SizeCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput optionText="adult_name" />
			</ReferenceInput>
			<NumberInput source="is_child" />
			<ReferenceInput source="id_size_type" reference="sizeTypes">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="size_int" />
			<TextInput source="size_eu" />
			<TextInput source="size_fr" />
			<TextInput source="size_uk" />
			<TextInput source="size_us" />
			<TextInput source="age_child" />
		</SimpleForm>
	</Create>
);
