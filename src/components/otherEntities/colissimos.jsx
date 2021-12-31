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
	NumberInput,
} from "react-admin";

export const ColissimoList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => record.weight}
					tertiaryText={(record) => record.price}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="name" />
					<TextField source="weight" />
					<TextField source="price" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const ColissimoTitle = ({ record }) => {
	return <span>Colissimo {record ? `"${record.name}"` : ""}</span>;
};

export const ColissimoEdit = (props) => (
	<Edit title={<ColissimoTitle />} {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="name" />
			<TextInput source="weight" />
			<NumberInput source="price" />
		</SimpleForm>
	</Edit>
);

export const ColissimoCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="weight" />
			<NumberInput source="price" />
		</SimpleForm>
	</Create>
);
