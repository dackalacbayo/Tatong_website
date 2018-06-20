import React, { Component } from "react";
import ContactForm from "../components/shared/ContactForm";
import GoogleMap from "../components/shared/GoogleMap";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="container py-5">
        <section className="professional_builder row ">
          <div className="container">
            <section className="about_us_area row py-5">
              <div className="container">
                <div className="row about_row">
                  <div className="who_we_area col-md-6 col-sm-6 mb-5">
                    <div className="subtittle ">
                      <h2 className="display-4 text-uppercase font-400">
                        let&prime;s get in touch
                      </h2>
                      <div className="divider-black-left" />
                    </div>
                    <GoogleMap height={"37vh"} />
                  </div>
                  <div className="col-md-6 col-sm-6 about_client about-left">
                    <div className="page-title text-center mb-4">
                      <h4 className="title display-5">Contact Us</h4>

                      <p className="pt-3">
                        Interested in working together? We&prime;re approachable
                        and would love to speak to you. Feel free to call, send
                        us an email or simply complete the enquiry form.
                      </p>
                    </div>
                    <ContactForm />



                <form name="contactDetails" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contactDetails" />
                  <p>
                   <label>Your Name: <input type="text" name="name" /></label>
                  </p>
                  <p>
                   <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                   <label>Your Role: <select name="role[]" multiple>
                     <option value="leader">Leader</option>
                     <option value="follower">Follower</option>
                   </select></label>
                  </p>
                  <p>
                   <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                   <button type="submit">Send</button>
                  </p>
                </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
