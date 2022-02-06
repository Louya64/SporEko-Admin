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

export const ItemList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_item" />
					<TextField source="name" />
					<ReferenceField source="id_category" reference="categories">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_size_type" reference="sizeTypes">
						<TextField source="name" />
					</ReferenceField>
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const ItemTitle = ({ record }) => {
	return <span>Articles {record ? `"${record.name}"` : ""}</span>;
};

export const ItemEdit = (props) => (
	<Edit title={<ItemTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_item" />
			<TextInput source="name" />
			<ReferenceInput source="id_category" reference="categories">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_size_type" reference="sizeTypes">
				<SelectInput source="name" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const ItemCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<ReferenceInput source="id_category" reference="categories">
				<SelectInput source="name" />
			</ReferenceInput>
			<ReferenceInput source="id_size_type" reference="sizeTypes">
				<SelectInput source="name" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
