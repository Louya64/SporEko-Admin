import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import BooleanNumField from "../BooleanNumField";
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

export const DelivererList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_deliverer" />
					<TextField source="name" />
					<BooleanNumField source="weight_condition" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const DelivererTitle = ({ record }) => {
	return <span>Livreurs {record ? `"${record.name}"` : ""}</span>;
};

export const DelivererEdit = (props) => (
	<Edit title={<DelivererTitle />} {...props}>
		<SimpleForm>
			<NumberField label="id" disabled source="id_deliverer" />
			<TextInput source="name" />
			<NumberInput source="weight_condition" />
		</SimpleForm>
	</Edit>
);

export const DelivererCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<NumberInput source="weight_condition" />
		</SimpleForm>
	</Create>
);
