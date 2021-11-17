import React, { useState, useEffect } from "react";
import api from "../api";
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Table,
} from "reactstrap";

const Gasto = () => {
	const [idgasto, setIdgasto] = useState("");
	const [descricao, setDescricao] = useState("");
	const [valor, setValor] = useState("");
	const [gastos, setGastos] = useState([]);

	//chamado ao montar o componente
	useEffect(() => {
		(async () => {
			list();
		})();
	}, []);

	const list = () => {
		api
			.get("/api/gasto/list")
			.then(({ data }) => {
				setGastos(data.gastos);
			})
			.catch((e) => alert(e.response.data.error[0]));
	};

	const save = (e) => {
		e.preventDefault();
		if (idgasto) {
			api
				.put("/api/gasto/update", { idgasto, descricao, valor })
				.then(() => {
					handle({ idgasto: "", descricao: "", valor: "" });
					list();
				})
				.catch((e) => {
					alert(e.response.data.error[0]);
				});
		} else {
			api
				.post("/api/gasto/create", { descricao, valor })
				.then(() => {
					handle({ idgasto: "", descricao: "", valor: "" });
					list();
				})
				.catch((e) => {
					alert(e.response.data.error[0]);
				});
		}
	};

	const remove = (e) => {
		e.preventDefault();
		if (idgasto) {
			api
				.delete("/api/gasto/remove", { data: { idgasto } })
				.then(() => {
					handle({ idgasto: "", descricao: "", valor: "" });
					list();
				})
				.catch((e) => {
					alert(e.response.data.error[0]);
				});
		}
	};

	const handle = (obj) => {
		setIdgasto(obj.idgasto);
		setDescricao(obj.descricao);
		setValor(obj.valor);
	};

	return (
		<Container>
			<Row className="mt-3">
				<Col>
					<h4>Gasto</h4>
				</Col>
			</Row>
			<Form>
				<FormGroup>
					<Label for="id">ID</Label>
					<Input value={idgasto} disabled id="id" />
				</FormGroup>
				<FormGroup>
					<Label for="descricao">Descrição</Label>
					<Input
						value={descricao}
						onChange={(e) => setDescricao(e.target.value)}
						id="descricao"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="valor">Valor</Label>
					<Input
						value={valor}
						onChange={(e) => setValor(e.target.value)}
						id="valor"
					/>
				</FormGroup>
				<FormGroup>
					<Button
						onClick={save}
						color="primary"
						size="sm"
						style={{ marginRight: 10 }}
					>
						Salvar
					</Button>
					{idgasto && (
						<>
							<Button
								onClick={remove}
								color="primary"
								size="sm"
								style={{ marginRight: 10 }}
							>
								Excluir
							</Button>
							<Button
								color="primary"
								size="sm"
								onClick={() =>
									handle({ idgasto: "", descricao: "", valor: "" })
								}
							>
								Limpar
							</Button>
						</>
					)}
				</FormGroup>
			</Form>
			{gastos.length > 0 && (
				<Table hover className="mt-3">
					<thead>
						<tr>
							<th>ID</th>
							<th>Descrição</th>
							<th>Valor</th>
						</tr>
					</thead>
					<tbody>
						{gastos.map((item) => (
							<tr key={item.idgasto} onClick={() => handle(item)}>
								<td>{item.idgasto}</td>
								<td>{item.descricao}</td>
								<td>{item.valor}</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</Container>
	);
};

export default Gasto;
