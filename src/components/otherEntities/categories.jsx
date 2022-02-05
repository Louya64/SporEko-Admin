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

export const CategoryList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<TextField label="id" source="id_category" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};
const CategoryTitle = ({ record }) => {
	return <span>Catégorie {record ? `"${record.name}"` : ""}</span>;
};

export const CategoryEdit = (props) => (
	<Edit title={<CategoryTitle />} {...props}>
		<SimpleForm>
			<TextInput label="id" disable source="id_category" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const CategoryCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput disable source="name" />
		</SimpleForm>
	</Create>
);
