import React from 'react'

const Newsletter = () => (
  <div className="site-section newsletter" id="newsletter">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="site-section-heading" data-aos-disabled="fade-up">
            <h2>Newsletter</h2>
          </div>
        </div>
        <div className="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
          <p>Subscribe to our mailing list! We will reach out when the ticket are avayable and speakers annunced.</p>
        </div>
      </div>
      <div id="mc_embed_signup">
        <form action="https://webdebs.us2.list-manage.com/subscribe/post?u=67c1d13ec89909785151c7cbb&amp;id=170b325380"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
          target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="row">
              <div className="col-sm-6">
                <div className="mc-field-group form-group">
                  <label htmlFor="mce-EMAIL" className="col-form-label">Email Address <span className="asterisk">(required)</span>
                  </label>
                  <input type="email" defaultValue="" name="EMAIL" className="required email form-control" id="mce-EMAIL" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mc-field-group form-group">
                  <label htmlFor="mce-FNAME" className="col-form-label">First Name </label>
                  <input type="text" defaultValue="" name="FNAME" className="form-control" id="mce-FNAME" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mc-field-group form-group">
                  <label htmlFor="mce-LNAME" className="col-form-label">Last Name </label>
                  <input type="text" defaultValue="" name="LNAME" className="form-control" id="mce-LNAME" />
                </div>
              </div>
            </div>
            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group form-group">
              <div className="content__gdpr">
                <label className="text-uppercase text-primary">Marketing Permissions</label>
                <p>Please select all the ways you would like to hear from WEBdeBS, Associazione di Promozione Sociale
              senza scopo di lucro:</p>
                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input av-checkbox" type="checkbox" id="gdpr_8549" name="gdpr[8549]" defaultValue="Y" />
                    <label className="form-check-label text-uppercase" htmlFor="gdpr_8549">Email</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input av-checkbox" type="checkbox" id="gdpr_8553" name="gdpr[8553]" defaultValue="Y" />
                    <label className="form-check-label text-uppercase" htmlFor="gdpr_8553">Direct Mail</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input av-checkbox" type="checkbox" id="gdpr_8557" name="gdpr[8557]" defaultValue="Y" />
                    <label className="form-check-label text-uppercase" htmlFor="gdpr_8557">Customized Online Advertising</label>
                  </div>
                </fieldset>
                <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information
              about our privacy practices, please visit our website.</p>
              </div>
              <div className="content__gdprLegal">
                <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your
              information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/"
                    target="_blank" rel="noopener noreferrer">Learn more about Mailchimp's privacy practices here.</a></p>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div style={{ position: "absolute", left: "-5000px", "ariaHidden": "true" }}><input type="text"
              name="b_67c1d13ec89909785151c7cbb_170b325380" tabIndex="-1" defaultValue="" /></div>
            <div className="clear"><input type="submit" className="btn-custom" defaultValue="Subscribe" name="subscribe"
              id="mc-embedded-subscribe" /></div>
          </div>
        </form>
      </div>
    </div>
  </div>
)
  
export default Newsletter
