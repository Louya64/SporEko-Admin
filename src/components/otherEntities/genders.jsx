import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, SimpleList, Datagrid, TextField } from "react-admin";

export const GenderList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<TextField label="id" source="id_gender" />
					<TextField source="adult_name" />
					<TextField source="child_name" />
				</Datagrid>
			)}
		</List>
	);
};
