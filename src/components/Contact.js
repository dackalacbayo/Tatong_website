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
