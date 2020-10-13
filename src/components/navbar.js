import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <>
         <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">Berry<span></span></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#feature">Features</a></li>
                <li><a href="#organisations">Organisations</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#" data-target="#login" data-toggle="modal">Sign in</a></li>
                <li class="btn-trial"><a href="#footer">Free Trail</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
