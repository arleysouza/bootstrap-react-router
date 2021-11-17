import React, { useState, useContext } from "react";
import { Context } from "../AuthContext";
import history from "../history";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";

const Login = () => {
	const [mail, setMail] = useState("");
	const [senha, setSenha] = useState("");
	const { login } = useContext(Context);

	const handle = (e) => {
		e.preventDefault();
		login(mail, senha);
	};

	return (
		<Container>
			<Row className="mt-3">
				<Col>
					<h4>Login</h4>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<Label for="mail">e-mail</Label>
					<Input
						value={mail}
						onChange={(e) => setMail(e.target.value)}
						id="mail"
					/>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<Label for="senha">Senha</Label>
					<Input
						type="password"
						value={senha}
						onChange={(e) => setSenha(e.target.value)}
						id="senha"
					/>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<Button
						onClick={handle}
						color="primary"
						size="sm"
						style={{ marginRight: 10 }}
					>
						Logar
					</Button>
					<Button
						onClick={() => history.push("/cadastro")}
						color="primary"
						size="sm"
					>
						Cadastrar
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
