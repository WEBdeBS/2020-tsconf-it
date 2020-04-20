import React from 'react'

const menuIconStyle = {
  position: "relative",
  top: "3px",
};

const Header = () => (
  <header className="site-navbar py-3" role="banner">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-11 col-xl-2">
          <h1 className="mb-0"><a href="/" className="text-white h2 mb-0">TS<span className="text-primary">conf</span> </a></h1>
        </div>
        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li className="active"><a href="/">Home</a></li>
              {/* <li><a href="#call-for-paper">Call for paper</a></li> */}
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="#code-of-conduct">Code of Conduct</a></li>
              {/* <li><a href="#location">Location</a></li> */}
              {/*
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#tickets">Tickets</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li className="cta"><a href="/tickets">Buy Tickets</a></li>*/}
            </ul>
          </nav>
        </div>
        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={menuIconStyle}>
          <button className="site-menu-toggle js-menu-toggle text-white">
            <span className="icon-menu h3"></span>
          </button>
        </div>
      </div>
    </div>
  </header >
)

export default Header
