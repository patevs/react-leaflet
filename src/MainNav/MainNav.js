import React, { Component } from 'react';

//NavbarHeader
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap'

import './MainNav.css';

class MainNav extends Component {
	render() {
		return (
			<div className="MainNav">

				<div>
					<div>

						<Navbar inverse collapseOnSelect>

							<Navbar.Header>
								<Navbar.Brand>
									<a href="#brand">Mate Freight | Logistics</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>

							<Navbar.Collapse>

								<Nav>
									<NavItem eventKey={1} href="#">
										Contact
									</NavItem>
									<NavItem eventKey={2} href="#">
										About
									</NavItem>
									<NavDropdown eventKey={3} title="Resources" id="basic-nav-dropdown">
										<MenuItem eventKey={3.1}>Action</MenuItem>
										<MenuItem eventKey={3.2}>Another action</MenuItem>
										<MenuItem eventKey={3.3}>Something else here</MenuItem>
										<MenuItem divider />
										<MenuItem eventKey={3.3}>Separated link</MenuItem>
									</NavDropdown>
								</Nav>

								<Nav pullRight>
									<NavItem eventKey={1} href="#">
										<ButtonToolbar>
											<Button id="login-btn"><span className="glyphicon glyphicon-log-in"></span> Login</Button>
										</ButtonToolbar>
									</NavItem>
									<NavItem eventKey={2} href="#">
										<ButtonToolbar>
											<Button id="signup-btn" bsStyle="success"><span className="glyphicon glyphicon-user"></span> Sign Up</Button>
										</ButtonToolbar>
									</NavItem>
								</Nav>

							</Navbar.Collapse>
						</Navbar>

					</div>
				</div>

			</div>
		);
	}
}

export default MainNav;

/*

*/