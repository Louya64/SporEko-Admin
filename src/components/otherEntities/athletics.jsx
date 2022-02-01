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

export const AthleticList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_athletic" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const AthleticTitle = ({ record }) => {
	return <span>Style de sportif {record ? `"${record.name}"` : ""}</span>;
};

export const AthleticEdit = (props) => (
	<Edit title={<AthleticTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_athletic" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const AthleticCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
