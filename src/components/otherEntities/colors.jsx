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
import { ColorField, ColorInput } from "react-admin-color-input";

export const ColorList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => record.color_code}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="name" />
					<ColorField source="color_code" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const ColorTitle = ({ record }) => {
	return <span>Couleur {record ? `"${record.name}"` : ""}</span>;
};

export const ColorEdit = (props) => (
	<Edit title={<ColorTitle />} {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="name" />
			<ColorInput source="color_code" />
		</SimpleForm>
	</Edit>
);

export const ColorCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<ColorInput source="color_code" />
		</SimpleForm>
	</Create>
);
