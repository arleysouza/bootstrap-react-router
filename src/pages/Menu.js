import React, { useContext } from "react";
import { Context } from "../AuthContext";
import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
	const { logout } = useContext(Context);
	return (
		<Nav>
			<h2>FATEC</h2>
			<NavItem>
				<NavLink active href="/login">
					Login
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active href="/gasto">
					Gasto
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active onClick={() => logout()} style={{ cursor: "pointer" }}>
					Logout
				</NavLink>
			</NavItem>
		</Nav>
	);
};

export default Menu;
