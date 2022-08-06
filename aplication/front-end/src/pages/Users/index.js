import React from 'react';
import './users.css';

function index() {
	return (
		<div id="table">
			<div className="container">
				<h3 className="table-title">Lista de cadastro</h3>
				<table>
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
			</div>
		</div>
	);
}

export default index;
