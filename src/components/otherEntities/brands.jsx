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

export const BrandList = (props) => {
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

const BrandTitle = ({ record }) => {
	return <span>Marque {record ? `"${record.name}"` : ""}</span>;
};

export const BrandEdit = (props) => (
	<Edit title={<BrandTitle />} {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const BrandCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
