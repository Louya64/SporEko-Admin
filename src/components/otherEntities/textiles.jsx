import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
} from "react-admin";

export const TextileList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_textile" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const TextileTitle = ({ record }) => {
	return <span>Matières {record ? `"${record.name}"` : ""}</span>;
};

export const TextileEdit = (props) => (
	<Edit title={<TextileTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_textile" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const TextileCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
