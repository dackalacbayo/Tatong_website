import React, { Component } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import ContactForm from "../components/shared/ContactForm";

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
                      <h2 className="display-4 text-uppercase font-400">let&prime;s get in touch</h2>
                      <div className="divider-black-left" />
                    </div>
                    <p className="pt-3">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>

                    <div className="single-contact-info d-flex h-auto">
                      <div className="contact-icon mr-15 ">
                        <div className="address icon-box mb-4">
                          <h2 className="featurette-heading py-2 pl-2">
                            <i className="address fas fa-map-marker-alt" />
                          </h2>
                        </div>
                      </div>
                      <h5 className="text-left black ml-4 pt-3">
                        3201 Antel Global Corporate Center, J. Vargas Ave.,
                        Ortigas Center, Pasig City
                      </h5>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 about_client about-left">
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
