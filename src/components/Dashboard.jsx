import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const Dashboard = () => {
	return (
		<Card>
			<CardHeader title="Bienvenue sur l'admin !" />
			<CardContent>
				Il vous sera possible de voir, ajouter, modifier et supprimer les
				éléments de votre base de donnée
			</CardContent>
		</Card>
	);
};

export default Dashboard;
