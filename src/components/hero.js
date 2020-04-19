import React from 'react'

const Hero = () => (
  <div className="site-section site-hero">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12">
          <span className="d-block mb-3 caption" data-aos-disabled="fade-up" data-aos-delay="100">Independent Italian TypeScript Conference</span>
          <h1 className="d-block mb-4" data-aos-disabled="fade-up" data-aos-delay="200">TSconf <span class="del">2020</span></h1>
          <div class="d-block mb-3">
            As the coronavirus (COVID-19) situation has continued to evolve around the world, WEBdeBS has been actively assessing the risk following directions and guidelines from public health authorities. In the end, because the health and safety of attendees  and partners are our highest priority, we’ve decided to cancel this year’s TS-Conf.it. As the moment of the CFP selection approaches and the beginning of the ticket sale we think that it is better to stay safe than sorry. We strongly believe that most of the value of a conference came from the networking and the hall way chats so we decided not to take the “on-line only event” route.
          </div>
          <span className="d-block mb-5 caption date" data-aos-disabled="fade-up" data-aos-delay="300">
            {/* October 2nd, Desenzano del Garda, Italy */}
            See you in 2021!
          </span>
          {/*<a href="#" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>Buy Tickets</span></a>*/}
        </div>

      </div>
    </div>
  </div>
)

export default Hero
