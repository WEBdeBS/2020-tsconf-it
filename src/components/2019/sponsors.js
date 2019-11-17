import React from 'react'
import { Link } from 'gatsby'

const Sponsors = () => (
  <div className="site-section sponsors" id="sponsors">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4 ">
          <div className="site-section-heading" data-aos-disabled="fade-up">
            <h2>Sponsors</h2>
          </div>
        </div>
        <div className="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
          {/* 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          */}
        </div>
      </div>
      
      <div className="row mb-5 gold">
        <div className="col-12"><h2>Gold</h2></div>
        <div className="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="200">
          <a href="https://microsoft.it/" target="_blank" alt="Microsoft" rel="noopener">
            <img src="/images/microsoft_logo.svg" alt="Image" className="img-fluid img-full" />
          </a>
          
        </div>
        <div className="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="300">
          <a href="https://buildo.io/" target="_blank" alt="Buildo" rel="noopener">
            <img src="/images/buildo_logo.svg" alt="Image" className="img-fluid img-full" />
          </a>
        </div>
      </div>
      <div className="row mb-5 silver">
        <div className="col-12"><h2>Silver</h2></div>
        <div className="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="400">
          <a href="https://codermine.com/" target="_blank" alt="Codermine" rel="noopener">
            <img src="/images/Vertical-Codermine-Logo-white.svg" alt="Image" className="img-fluid img-full" />
          </a>
        </div>
        <div className="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="500">
          <a href="https://palmabit.com/" target="_blank" alt="Codermine" rel="noopener">
            <img src="/images/palmabit_rgb_vettoriale.svg" alt="Image" className="img-fluid img-full" />
          </a>
        </div>
      </div>
      {/* 
      <div className="row" data-aos-disabled="fade-up" data-aos-delay="500">
        <div className="col-12 text-center pt-5">
          <a href="#" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="800"><span>Be a Sponsor</span></a>
        </div>
      </div>
      */}
    </div>
  </div>
)

export default Sponsors


