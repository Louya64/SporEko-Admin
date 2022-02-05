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

export const GenderList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_gender" />
					<TextField source="adult_name" />
					<TextField source="child_name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const GenderTitle = ({ record }) => {
	return <span>Genre {record ? `"${record.adult_name}"` : ""}</span>;
};

export const GenderEdit = (props) => (
	<Edit title={<GenderTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_gender" />
			<TextInput source="adult_name" />
			<TextInput source="child_name" />
		</SimpleForm>
	</Edit>
);

export const GenderCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="adult_name" />
			<TextInput source="child_name" />
		</SimpleForm>
	</Create>
);
