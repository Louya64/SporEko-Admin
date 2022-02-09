import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import BooleanNumField from "../BooleanNumField";
import RichTextInput from "ra-input-rich-text";
import {
	List,
	SimpleList,
	Datagrid,
	TextField,
	NumberField,
	DateField,
	ReferenceField,
	ImageField,
	EditButton,
	Edit,
	SimpleForm,
	NumberInput,
} from "react-admin";
import { withStyles } from "@material-ui/core/styles";

const CustomTitleField = ({ record }) => {
	let str = record.title;
	return record ? (
		<span>{str.length > 15 ? str.slice(0, 15) + "..." : str}</span>
	) : null;
};

export const OfferList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props}>
			{isSmall ? (
				<SimpleList primaryText={(record) => record.title} />
			) : (
				<Datagrid>
					<NumberField label="id" source="id_offer" />
					<DateField source="creation_date" />
					<ReferenceField source="id_user_seller" reference="users">
						<TextField source="pseudo" />
					</ReferenceField>
					<CustomTitleField source="title" />
					<ReferenceField source="id_sport" reference="sports">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_gender" reference="genders">
						<TextField source="adult_name" />
					</ReferenceField>
					<BooleanNumField source="is_child" />
					<ReferenceField source="id_category" reference="categories">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="id_item" reference="items">
						<TextField source="name" />
					</ReferenceField>
					<NumberField source="price" />
					<TextField source="purchase_date" />
					<BooleanNumField source="is_archived" />
					<BooleanNumField source="is_draft" />
					<EditButton />
				</Datagrid>
			)}
		</List>
	);
};

const OfferTitle = ({ record }) => {
	return <span>Annonces {record ? `"${record.name}"` : ""}</span>;
};
const styles = {
	image: { maxHeight: "2.5rem" },
};

export const OfferEdit = withStyles(styles)(({ classes, ...props }) => (
	<Edit title={<OfferTitle />} {...props}>
		<SimpleForm>
			<NumberField label="id" disabled source="id_offer" />
			<ImageField source="picture1" title="name" classes={classes} />
			<ImageField source="picture2" title="name" classes={classes} />
			<ImageField source="picture3" title="name" classes={classes} />
			<ImageField source="picture4" title="name" classes={classes} />
			<ImageField source="picture5" title="name" classes={classes} />
			<ImageField source="picture6" title="name" classes={classes} />
			<ImageField source="picture7" title="name" classes={classes} />
			<ImageField source="picture8" title="name" classes={classes} />
			<ImageField source="picture9" title="name" classes={classes} />
			<ImageField source="picture10" title="name" classes={classes} />
			<ImageField source="picture11" title="name" classes={classes} />
			<ImageField source="picture12" title="name" classes={classes} />
			<ImageField source="picture13" title="name" classes={classes} />
			<ImageField source="picture14" title="name" classes={classes} />
			<ImageField source="picture15" title="name" classes={classes} />
			<ImageField source="picture16" title="name" classes={classes} />
			<ImageField source="picture17" title="name" classes={classes} />
			<ImageField source="picture18" title="name" classes={classes} />
			<ImageField source="picture19" title="name" classes={classes} />
			<ImageField source="picture20" title="name" classes={classes} />
			<DateField source="creation_date" />
			<ReferenceField source="id_user_seller" reference="users">
				<TextField source="pseudo" />
			</ReferenceField>
			<RichTextInput source="title" />
			<RichTextInput source="description" />
			<ReferenceField source="id_sport" reference="sports">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_gender" disable reference="genders">
				<TextField source="adult_name" />
			</ReferenceField>
			<NumberInput disabled source="is_child" />
			<ReferenceField source="id_category" reference="categories">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_item" reference="items">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_brand" reference="brands">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_textile" reference="textiles">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_size" reference="sizes">
				<>
					<TextField source="size_int" />/
					<TextField source="size_eu" />/
					<TextField source="size_uk" />/
					<TextField source="age_child" />
				</>
			</ReferenceField>
			<ReferenceField source="id_color1" reference="colors">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_color2" reference="colors">
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="id_condition" reference="conditions">
				<TextField source="name" />
			</ReferenceField>
			<NumberField source="price" />
			<NumberField source="weight" />
			<ReferenceField source="id_user_buyer" disable reference="users">
				<TextField source="pseudo" />
			</ReferenceField>
			<DateField source="purchase_date" />
			<NumberInput source="is_archived" />
			<NumberInput source="is_draft" />
		</SimpleForm>
	</Edit>
));
