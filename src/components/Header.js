import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'
import React, { useState, Fragment } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink } from 'reactstrap';
import auth from '../reducers/auth';


const Header = ({ auth: { isAuthenticated, loading, user}, logout }) => {

    const authLinks = (
        <Fragment>
            <NavItem className="nav-item active">
                <NavLink className="nav-link" href="/home">Home <span className="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem className="nav-item">
                <NavLink className="nav-link"  to={ isAuthenticated && !loading && user && `/profile${user._id}`} > View Profile</NavLink>
            </NavItem>
            <NavItem className="nav-item">
                <NavLink className="nav-link" href="/browse">Browse Profiles</NavLink>
            </NavItem>
            <NavItem className="nav-item">
                <NavLink href="/" className="nav-link" onClick={logout} >Log Out</NavLink>
            </NavItem>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <NavItem className="nav-item">
                <NavLink className="nav-link" href='#' data-toggle="modal" data-target="#loginModal">Login</NavLink>
            </NavItem>
            <NavItem className="nav-item">
                <NavLink className="nav-link" href='#' data-toggle="modal" data-target="#registerModal">Sign Up</NavLink>
            </NavItem>
        </Fragment>
    )
        return (
            <Navbar className="navbar-fixed-top" expand='md'>
                <NavbarBrand className="navbar-brand" href="/">Rednose</NavbarBrand>
                
                <Collapse className="collapse navbar-collapse" id="navbarNav">
                    <Nav className="navbar-nav">
                        { isAuthenticated && !loading ? authLinks : guestLinks }
                    </Nav>
                </Collapse>
            </Navbar>
        )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,

})

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, { logout })(Header)