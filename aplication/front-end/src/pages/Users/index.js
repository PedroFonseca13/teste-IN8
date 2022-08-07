import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/api';
import Footer from '../../components/Footer';
import Icon from '../../assets/img/topo-pag.svg';
import './users.css';

function index() {
	const [users, setUsers] = useState([]);

	const fetchGetUser = async () => {
		const result = await getUser();
		setUsers(result);
	};

	useEffect(() => {
		fetchGetUser();
	});


	return (
		<>
			<div id="table">
				<div className="container">
					<h3 className="table-title">Lista de cadastro</h3>
					<table className="table">
						<thead>
							<tr>
								<th></th>
								<th>nome</th>
								<th>e-mail</th>
								<th>nascimento</th>
								<th>telefone</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{ users.map(user => (
								<tr key={ user.id }>
									<td></td>
									<td>{ user.name }</td>
									<td>{ user.email }</td>
									<td>{ user.bday }</td>
									<td>{ user.phone }</td>
									<td></td>
								</tr>
							)) }

							<tr>
								<td className="td-bottom"></td>
								<td className="td-bottom"></td>
								<td className="td-bottom"></td>
								<td className="td-bottom"></td>
								<td className="td-bottom"></td>
								<td className="td-bottom"></td>
							</tr>
						</tbody>
					</table>
					<span>
						<Link to="/">
							<img src={ Icon } alt="Voltar para Home" className="topo-home" />
						</Link>
					</span>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default index;
