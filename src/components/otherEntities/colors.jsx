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
					<NumberField label="id" source="id_color" />
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
			<NumberInput label="id" disabled source="id_color" />
			<TextInput source="name" />
			<ColorInput source="color_code" />
		</SimpleForm>
	</Edit>
);

export const ColorCreate = (props) => {
	console.log(props);
	return (
		<Create {...props}>
			<SimpleForm>
				<NumberInput label="id" source="id" />
				<TextInput source="name" />
				<ColorInput source="color_code" />
			</SimpleForm>
		</Create>
	);
};
