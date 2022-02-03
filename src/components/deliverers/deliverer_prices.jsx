import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	ReferenceField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	ReferenceInput,
	SelectInput,
} from "react-admin";

export const Deliverer_priceList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_deliverer_price" />
					<TextField source="name" />
					<NumberField source="min_weight" />
					<NumberField source="max_weight" />
					<NumberField source="price" />
					<ReferenceField source="id_deliverer" reference="deliverers">
						<TextField source="name" />
					</ReferenceField>
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const Deliverer_priceTitle = ({ record }) => {
	return <span>Prix des livreurs {record ? `"${record.name}"` : ""}</span>;
};

export const Deliverer_priceEdit = (props) => (
	<Edit title={<Deliverer_priceTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_deliverer_price" />
			<TextInput source="name" />
			<NumberInput source="min_weight" />
			<NumberInput source="max_weight" />
			<NumberInput source="price" />
			<ReferenceInput source="id_deliverer" reference="deliverers">
				<SelectInput source="name" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const Deliverer_priceCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<NumberInput source="min_weight" />
			<NumberInput source="max_weight" />
			<NumberInput source="price" />
			<ReferenceInput source="id_deliverer" reference="deliverers">
				<SelectInput source="name" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
