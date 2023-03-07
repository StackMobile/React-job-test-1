import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/setting';
import '../../img/showcase.jpg'

const Navbar = ({ setting: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav'>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className='nav-item mr-5'>
        <Link to="/profiles" >Home</Link>
      </li>
      <li className='nav-item'>
        <Link to="/login" >Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light">
      <div className='container-fluid'>
        <Link to="/" className='navbar-brand'>
          {/* <img src='"https:\/\/paul.blueboxonline.com\/portal\/lamp01\/custom_modules\/logo.jpg'/> */}
          <img src='"../../img/showcase.jpg'alt='no need'/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"><Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment></div>
      </div>
    </nav>
    
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  setting: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  setting: state.setting
});

export default connect(mapStateToProps, { logout })(Navbar);
