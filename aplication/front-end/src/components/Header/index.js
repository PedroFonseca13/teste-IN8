import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo-in8-dev.svg';

import './header.css';
export default function index() {
	return (
		<header>
			<div className="navigation">
				<Link className="" to="/">
					<img src={ logo } alt="" className="img-logo" />
				</Link>

				<nav className="" id="nav">
					<ul className="nav-menu">
						<li className="">
							<Link className="" to="/registration">
								cadastro
							</Link>
						</li>
						<li className="">
							<Link className="" to="/users">
								lista
							</Link>
						</li>
						<li className="">
							<Link className="" to="/about-me">
								sobre mim
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
