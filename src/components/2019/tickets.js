import React from 'react'

const Tickets = () => (
  <div className="site-section call-for-paper" id="tickets">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="site-section-heading" data-aos-disabled="fade-up">
            <h2>Tickets</h2>
          </div>
        </div>
      <div className="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
          <p>You can find our tickets available on Eventbrite</p>
      </div>
   </div>
      <div className="row align-items-center">
        <div className="col-md-10">
          <a href="https://www.eventbrite.it/e/biglietti-tsconf-2019-63188031102?utm_source=website&utm_medium=web&utm_term=TSconf+2019" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>Buy your ticket!</span></a>
        </div>
      </div>
    </div>
  </div>
)

export default Tickets
