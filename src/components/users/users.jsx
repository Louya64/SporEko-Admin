import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import BooleanNumField from "../BooleanNumField";

import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  DateField,
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
          <DateField source="creation_date" />
          <TextField source="phone" />
          <BooleanNumField source="is_professional" />
          <BooleanNumField source="is_admin" />
          <BooleanNumField source="is_archived" />
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
      <TextInput disabled source="id" />
      <TextInput source="pseudo" />
      <TextInput source="lastname" />
      <TextInput source="firstname" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="adress_complement" />
      <NumberInput source="zipcode" />
      <TextInput source="city" />
      <ReferenceInput source="id_country" reference="countries">
        <SelectInput source="name" />
      </ReferenceInput>
      <TextInput source="phone" />
      <DateInput source="birthday" />
      <TextInput source="picture" />
      <DateInput source="creation_date" />
      <NumberInput source="is_admin" />
      <NumberInput source="is_archived" />
      <ReferenceInput source="id_gender" reference="genders">
        <SelectInput source="name" />
      </ReferenceInput>
      <ReferenceInput source="id_athletic" reference="athletics">
        <SelectInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="pseudo" />
      <TextInput source="lastname" />
      <TextInput source="firstname" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="adress_complement" />
      <NumberInput source="zipcode" />
      <TextInput source="city" />
      <ReferenceInput source="id_country" reference="countries">
        <SelectInput source="name" />
      </ReferenceInput>
      <TextInput source="phone" />
      <DateInput source="birthday" />
      <TextInput source="picture" />
      <DateInput source="creation_date" />
      <NumberInput source="is_admin" />
      <NumberInput source="is_archived" />
      <ReferenceInput source="id_gender" reference="genders">
        <SelectInput source="name" />
      </ReferenceInput>
      <ReferenceInput source="id_athletic" reference="athletics">
        <SelectInput source="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
