import React from 'react'

const Map = () => (
  <div className="site-section map" id="location">
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col-lg-4">
          <div className="site-section-heading" data-aos-disabled="fade-up">
            <h2>Location</h2>
          </div>
        </div>
        <div className="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
          <p>Hotel Desenzano, Viale Cavour 40/42, Desenzano del Garda (BS) – Italy</p>
        </div>
      </div>
    </div>
    <iframe src="https://snazzymaps.com/embed/154926" width="100%" height="600px" style={{border: "none"}} title="This is a unique title"></iframe>
  </div>
)

export default Map


