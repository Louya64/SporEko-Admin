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

export const ConditionList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_condition" />
					<TextField source="name" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const ConditionTitle = ({ record }) => {
	return <span>État {record ? `"${record.name}"` : ""}</span>;
};

export const ConditionEdit = (props) => (
	<Edit title={<ConditionTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_condition" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const ConditionCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);
