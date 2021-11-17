import React, { useState, useContext } from "react";
import { Context } from "../AuthContext";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";

const Cadastro = () => {
	const [mail, setMail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmacao, setConfirmacao] = useState("");
	const { cadastrar } = useContext(Context);

	const handle = (e) => {
		e.preventDefault();
		if (senha.trim().length < 6) {
			alert("A senha precisa ter pelo menos 6 caracteres");
		} else if (senha.trim() !== confirmacao.trim()) {
			alert("A senha e confirmação precisam ser iguais");
		} else {
			cadastrar(mail, senha);
		}
	};

	return (
		<Container>
			<Row className="mt-3">
				<Col>
					<h4>Cadastro</h4>
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
					<Label for="confirmacao">Confirmação da senha</Label>
					<Input
						type="password"
						value={confirmacao}
						onChange={(e) => setConfirmacao(e.target.value)}
						id="confirmacao"
					/>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<Button onClick={handle} color="primary" size="sm">
						Enviar
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Cadastro;
