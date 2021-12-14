import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to="/">
					<img src={logo} alt="Kasa" />
				</Link>
				<nav>
					<Link to="/" className="nav-link">
						Accueil
					</Link>
					<Link to="/about" className="nav-link">
						À propos
					</Link>
				</nav>
			</header>
		);
	}
}

export default Header;
