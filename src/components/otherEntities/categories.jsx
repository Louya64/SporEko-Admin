import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, SimpleList, Datagrid, TextField } from "react-admin";

export const CategoryList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<TextField label="id" source="id_category" />
					<TextField source="name" />
				</Datagrid>
			)}
		</List>
	);
};
