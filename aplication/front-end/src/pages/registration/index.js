import React from 'react';
import './registration.css';

function index() {
	return (
		<div id="registration">
			<div className="container">
				<h3 className="registration-title">Cadastro</h3>

				<div className="form-container">
					<form action="post">
						<label className="control-label" htmlFor="name">Nome
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Fulano Beltrano de Oliveira da Silva" />
						</label>

						<label className="control-label" htmlFor="email">E-mail
							<input type="email" name="email" id="email" placeholder="fulanobos@gmail.com" />
						</label>

						<label className="control-label" htmlFor="bday">Nascimento
							<input type="date" name="bday" id="bday" placeholder="01/03/1992" />
						</label>

						<label className="control-label" htmlFor="phone">Telefone
							<input type="text" name="phone" id="phone" placeholder="(31) 9 9974-0420" />
						</label>
					</form>
					<button>Cadastrar</button>
				</div>
			</div>
		</div>
	);
}

export default index;
