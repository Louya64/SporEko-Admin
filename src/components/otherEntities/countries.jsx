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

export const CountryList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_country" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const CountryTitle = ({ record }) => {
	return <span>Pays {record ? `"${record.name}"` : ""}</span>;
};

export const CountryEdit = (props) => (
	<Edit title={<CountryTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_country" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const CountryCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
