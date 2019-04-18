import React from 'react';
const NavBar=(props)=>{
  return (
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">News Tray</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
      </div>
    </div>
  </nav>
  );
}
export default NavBar;