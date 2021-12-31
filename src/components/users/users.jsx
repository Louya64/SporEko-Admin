import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	EmailField,
	EditButton,
	ShowButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	ReferenceInput,
	SelectInput,
	DateInput,
} from "react-admin";

export const UserList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.lastname + " " + record.firstname}
					secondaryText={(record) => record.email}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="pseudo" />
					<TextField source="lastname" />
					<TextField source="firstname" />
					<EmailField source="email" />
					<EditButton />
					<ShowButton />
				</Datagrid>
			)}
		</List>
	);
};

const UserTitle = ({ record }) => {
	return <span>Utilisateur {record ? `"${record.pseudo}"` : ""}</span>;
};

export const UserEdit = (props) => (
	<Edit title={<UserTitle />} {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="lastname" />
			<TextInput source="firstname" />
			<TextInput source="adress" />
			<NumberInput source="zipcode" />
			<TextInput source="city" />
			<TextInput source="email" />
			<TextInput source="picture" />
			<NumberInput source="isadmin" />
			<NumberInput source="isarchived" />
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="adress_complement" />
			<DateInput source="birthday" />
			<TextInput source="phone" />
			<TextInput source="pseudo" />
		</SimpleForm>
	</Edit>
);

export const UserCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="lastname" />
			<TextInput source="firstname" />
			<TextInput source="adress" />
			<NumberInput source="zipcode" />
			<TextInput source="city" />
			<TextInput source="email" />
			<TextInput source="picture" />
			<NumberInput source="isadmin" />
			<NumberInput source="isarchived" />
			<ReferenceInput source="id_gender" reference="genders">
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="adress_complement" />
			<DateInput source="birthday" />
			<TextInput source="phone" />
			<TextInput source="pseudo" />
		</SimpleForm>
	</Create>
);
