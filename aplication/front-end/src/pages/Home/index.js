import React from 'react';
import Header from '../../components/Header';
import './home.css';

export default function index() {
	return (
		<div id="home">
			<div className="container">
				<Header />
				<h1>Estágio</h1>
				<h4>Prova de seleção</h4>
			</div>
		</div>
	);
}
