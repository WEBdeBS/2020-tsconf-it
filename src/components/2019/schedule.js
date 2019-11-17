import React from 'react'
import { Link } from 'gatsby'

const Schedule = () => (
  <div id="schedule" className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div
          className="col-lg-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="site-section-heading">
            <h2>Schedule</h2>
          </div>
        </div>
        <div
          className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
        </div>
      </div>
      <div className="row align-items-stretch program">
        <div
          className="col-12 border-top border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0" />
            <div className="col-md-9">
              <h2 className="text-white">Registration</h2>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">9:30</span> <span>AM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker1">
                <h2 className="text-white">
                  TypeScript, Open Source and the Government: the birth
                  of IO.italia.it
                </h2>
                <span>FEDERICO FEROLDI</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-top border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">10:20</span> <span>AM</span>
            </div>
            <div className="col-md-9">
              <h2 className="text-white">Coffe Break</h2>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">10:50</span> <span>AM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker3">
                <h2 className="text-white">
                  Full-stack type safety with TypeScript and io-ts
                </h2>
                <span>GIOVANNI GONZAGA</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">11:40</span> <span>AM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker6">
                <h2 className="text-white">
                  Building Infrastructure as a Code with Typescript and
                  AWS CDK
                </h2>
                <span>ANDREA VALENTINI</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-top border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">12:30</span> <span>AM</span>
            </div>
            <div className="col-md-9">
              <h2 className="text-white">Lunch</h2>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">2:00</span> <span>PM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker4">
                <h2 className="text-white">
                  Fall in Love With TS Decorators
                </h2>
                <span>DANIEL OSTROVSKY</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">2:50</span> <span>PM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker2">
                <h2 className="text-white">
                  Migrating large codebase to TypeScript
                </h2>
                <span>VOJTA PRIKRYL</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-top border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">3:40</span> <span>PM</span>
            </div>
            <div className="col-md-9">
              <h2 className="text-white">Coffe Break</h2>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">4:10</span> <span>PM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker5">
                <h2 className="text-white">The Cost of Abstractions</h2>
                <span>MASSIMILIANO MANTIONE</span> and{" "}
                <span>GIANLUCA CARUCCI</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0">
              <span className="h4">5:10</span> <span>PM</span>
            </div>
            <div className="col-md-9">
              <a href="#speaker7">
                <h2 className="text-white">
                  Start Betting on TypeScript
                </h2>
                <span>ORTA THEROX</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 border-top border-bottom py-5 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0" />
            <div className="col-md-9">
              <h2 className="text-white">
                Happy hour sponsored by{" "}
                <a href="https://www.buildo.io/">Buildo</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Schedule


