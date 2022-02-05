import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
  </div>;
}

Navbar.propTypes = {
    title : PropTypes.string,
    AboutText: PropTypes.string,};

Navbar.defaultProps = {
    title : 'Enter Text',
    AboutText: 'About Us',};
