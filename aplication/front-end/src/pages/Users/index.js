import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Icon from '../../assets/img/topo-pag.svg';
import './users.css';

function index() {
	return (
		<>
			<div id="table">
				<div className="container">
					<h3 className="table-title">Lista de cadastro</h3>
					<table className="table">
						<tr>
							<th></th>
							<th>nome</th>
							<th>e-mail</th>
							<th>nascimento</th>
							<th>telefone</th>
						</tr>
						<tr>
							<td></td>
							<td>Fulano</td>
							<td>fulanobos@gmail.com</td>
							<td>01/03/1992</td>
							<td>(31) 9 9974-0420</td>
						</tr>
						<tr>
							<td className="td-bottom"></td>
							<td className="td-bottom"></td>
							<td className="td-bottom"></td>
							<td className="td-bottom"></td>
							<td className="td-bottom"></td>
						</tr>
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
