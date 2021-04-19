import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./toggleTheme";

function Navbar() {
	return (
		<div className="NavBar">
			<nav className="nav">
				<div className="profile">
					<img src={avatar} alt="" />
				</div>

				<ul className="nav-items">
					<li className="nav-item">
						<NavLink
							to="/my-latest-portfolio"
							exact
							activeClassName="active"
							// className="nav-link"
						>
							.Home()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" exact activeClassName="active">
							.About()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/portfolios" exact activeClassName="active">
							.Projects()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contact" exact activeClassName="active">
							.Contact()
						</NavLink>
					</li>
				</ul>
				<ToggleTheme />
				<footer className="footer">
					<p>@2021 Aviv Tarkay.</p>
				</footer>
			</nav>
		</div>
	);
}

export default Navbar;
