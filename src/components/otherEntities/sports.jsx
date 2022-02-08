import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	ImageField,
	EditButton,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	NumberInput,
	ImageInput,
} from "react-admin";

import { withStyles } from "@material-ui/core/styles";

const styles = {
	image: { maxHeight: "2.5rem" },
};

export const SportList = withStyles(styles)(({ classes, ...props }) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_sport" />
					<TextField source="name" />
					<ImageField source="icon" title="name" classes={classes} />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
});

const SportTitle = ({ record }) => {
	return <span>Sports {record ? `"${record.name}"` : ""}</span>;
};

export const SportEdit = (props) => (
	<Edit title={<SportTitle />} {...props}>
		<SimpleForm>
			<NumberInput label="id" disabled source="id_sport" />
			<TextInput source="name" />
			<ImageInput source="icon" label="Related pictures" accept="image/*">
				<ImageField source="icon" title="name" />
			</ImageInput>
		</SimpleForm>
	</Edit>
);

export const SportCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<ImageInput source="icon" label="Related pictures" accept="image/*">
				<ImageField source="icon" title="name" />
			</ImageInput>
		</SimpleForm>
	</Create>
);
