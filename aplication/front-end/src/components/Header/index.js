import React from 'react';

import logo from '../../assets/icons/logo-in8-dev.svg';
// import menu from '../../assets/icons/hamburguer.svg';

import './header.css';
export default function index() {
	return (
		<header>
			<div className="navigation">
				<a className="" href="#">
					<img src={ logo } alt="" className="img-logo" />
				</a>

				<nav className="" id="nav">
					<ul className="nav-menu">
						<li className="">
							<a className="" href="#">
								cadastro
							</a>
						</li>
						<li className="">
							<a className="" href="#">
								lista
							</a>
						</li>
						<li className="">
							<a className="" href="#">
								Dropdown
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
