import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink } from 'reactstrap';


export default class Header extends React.Component {
    state = {
        dropdownOpen: false,
    }

    toggleDropdown = () => {
        this.setState = {
            dropDownOpen: !dropDownOpen,
            isSignedIn: false
        }
    }
    render() {
        return (
            <Navbar className="navbar-fixed-top" expand='md'>
                <NavbarBrand className="navbar-brand" href="/">Rednose</NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
                <Collapse className="collapse navbar-collapse" id="navbarNav">
                    <Nav className="navbar-nav">
                        <NavItem className="nav-item active">
                                <NavLink className="nav-link" href="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </NavItem>
                        <Dropdown isOpen={this.state.toggleDropdown}>
                            <DropdownToggle className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" href="#">Profile</DropdownToggle>
                            <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="/profile/<%= currentUser._id %>"> View Profile</DropdownItem>
                            <DropdownItem className="dropdown-item" href='#' data-toggle="modal" data-target="#deleteProfileModal">Delete Profile</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/browse">Browse Profiles</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="#" className="nav-link" data-toggle="modal" data-target="#logoutModal">Log Out</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href='#' data-toggle="modal" data-target="#loginModal">Login</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href='#' data-toggle="modal" data-target="#registerModal">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}