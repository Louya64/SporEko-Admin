import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
} from "react-admin";

export const GenderList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const GenderTitle = ({ record }) => {
	return <span>Genre {record ? `"${record.name}"` : ""}</span>;
};

export const GenderEdit = (props) => (
	<Edit title={<GenderTitle />} {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const GenderCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
