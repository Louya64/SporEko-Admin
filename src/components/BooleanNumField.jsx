import * as React from "react";
import FalseIcon from "@material-ui/icons/Clear";
import TrueIcon from "@material-ui/icons/Done";

const BooleanNumField = ({ record = {}, source }) => {
	let trueOrFalse = record[source] === 1;
	return <span>{trueOrFalse ? <TrueIcon /> : <FalseIcon />}</span>;
};

export default BooleanNumField;
