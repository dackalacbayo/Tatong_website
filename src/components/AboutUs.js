import React, { Component } from "react";
import ContactFormModal from "../components/ContactFormModal";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

class CompanyProfile extends Component {
  render() {
    return (
      <div className="container py-5">
        <section className="professional_builder row ">
          <div className="container mb-5">
            <div className="page-title text-center">
              <h4 className="title display-5">About Us</h4>
            </div>
          </div>
          <div className="container">
            <section className="about_us_area row py-4">
              <div className="container">
                <div className="row about_row">
                  <div className="who_we_area col-md-7 col-sm-6">
                    <div className="subtittle ">
                      <h2 className="title-about display-4 text-uppercase">who we are</h2>
                      <div className="divider-black-left ml-2" />
                    </div>
                    <p className="pt-5 pb-3">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isnt anything embarrassing hidden in the middle of text.
                    </p>
                    <ContactFormModal />
                  </div>
                  <div className="col-md-5 col-sm-6 about_client about-left">
                    <img
                      className="m-auto img-fluid"
                      src={image1}
                      height="100px"
                    />
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

export default CompanyProfile;
