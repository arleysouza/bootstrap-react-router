import React from "react";
import { Router, Switch } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Gasto from "./pages/Gasto";
import Cadastro from "./pages/Cadastro";
import CustomRoute from "./CustomRoute";
import history from "./history";
import { Container } from "reactstrap";

export default function App() {
	return (
		<AuthProvider>
			<Router history={history}>
				<Container className="bg-light border col-sm-12 col-md-6 col-lg-5 col-xl-4 p-3 mt-2">
					<Menu />
					<Switch>
						<CustomRoute exact path="/login" component={Login} />
						<CustomRoute exact path="/cadastro" component={Cadastro} />
						<CustomRoute isPrivate exact path="/gasto" component={Gasto} />
					</Switch>
				</Container>
			</Router>
		</AuthProvider>
	);
}
