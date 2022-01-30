import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, SimpleList, Datagrid, TextField } from "react-admin";

export const Size_typeList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.name} />
			) : (
				<Datagrid>
					<TextField label="id" source="id_size_type" />
					<TextField source="name" />
				</Datagrid>
			)}
		</List>
	);
};
