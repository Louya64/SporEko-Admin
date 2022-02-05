import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import BooleanNumField from "../BooleanNumField";

import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	EmailField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	PasswordInput,
	NumberInput,
	ReferenceInput,
	SelectInput,
	DateInput,
	required,
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
					<NumberField label="id" source="id_user" />
					<TextField source="pseudo" />
					<TextField source="lastname" />
					<TextField source="firstname" />
					<EmailField source="email" />
					<EditButton />
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
			<NumberInput label="id" disabled source="id_user" />
			<TextInput source="lastname" validate={required()} />
			<TextInput source="firstname" validate={required()} />
			<TextInput source="pseudo" validate={required()} />
			<ReferenceInput
				validate={required()}
				source="id_gender"
				reference="genders"
			>
				<SelectInput optionText="adult_name" />
			</ReferenceInput>
			<ReferenceInput
				validate={required()}
				source="id_country"
				reference="countries"
			>
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="email" validate={required()} />
			<PasswordInput source="hash_password" validate={required()} />
			<TextInput source="address" />
			<NumberInput source="zipcode" />
			<TextInput source="city" />
			<TextInput source="picture" />
			<NumberInput source="is_admin" />
			<NumberInput source="is_archived" />
			<NumberInput source="is_professional" />
			<TextInput source="address_complement" />
			<ReferenceInput source="id_athletic" reference="athletics">
				<SelectInput source="name" />
			</ReferenceInput>
			<DateInput source="birthday" />
			<TextInput source="phone" />
		</SimpleForm>
	</Edit>
);

export const UserCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="lastname" validate={required()} />
			<TextInput source="firstname" validate={required()} />
			<TextInput source="pseudo" validate={required()} />
			<ReferenceInput
				validate={required()}
				source="id_gender"
				reference="genders"
			>
				<SelectInput optionText="adult_name" />
			</ReferenceInput>
			<ReferenceInput
				validate={required()}
				source="id_country"
				reference="countries"
			>
				<SelectInput source="name" />
			</ReferenceInput>
			<TextInput source="email" validate={required()} />
			<PasswordInput source="hash_password" validate={required()} />
			<TextInput source="address" />
			<NumberInput source="zipcode" />
			<TextInput source="city" />
			<TextInput source="picture" />
			<NumberInput source="is_admin" />
			<NumberInput source="is_archived" />
			<NumberInput source="is_professional" />
			<TextInput source="address_complement" />
			<ReferenceInput source="id_athletic" reference="athletics">
				<SelectInput source="name" />
			</ReferenceInput>
			<DateInput source="birthday" />
			<TextInput source="phone" />
		</SimpleForm>
	</Create>
);
