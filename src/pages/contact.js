import React, { Component } from "react";
import Link from "gatsby-link";
import {
  Header,
  Icon,
  Segment,
  Label,
  Dropdown,
  Grid,
  Input,
  TextArea,
  Divider,
  Button,
  Select
} from "semantic-ui-react";
import PageHeader from "../components/shared/PageHeader";
import GoogleMap from "../components/shared/GoogleMap";
import ContactForm from "../components/shared/ContactForm";
import image1 from "../assets/images/image1.jpg";

class contact extends Component {
  render() {
    return (
      <div className="pt-5" id="content-14">
        <PageHeader
          title={"Contact"}
          breadcrumbItem1={"Home /"}
          href1={"./"}
          breadcrumbItem2={"Contact"}
          active2={"active"}
        />

        <div className="container pt-5">
          <div className="f_rht ml-3 mr-3 mb-3 text-center">
            <h2 className="display-4 font-400">Let&prime;s get in touch</h2>
            <p className="pt-2 pb-3 text-center">
              Questions? General Inquiries? Get in touch with us and we&prime;ll
              respond promptly.
            </p>
          </div>
        </div>

        <form
          method="POST"
          action="https://formspree.io/dackalacbayo@gmail.com"
        >
          <div className="container pb-5">
            <div className="row about_row mt-5">
              <div className="col-md-7 col-sm-6">
                <ContactForm />
              </div>
              <div className="col-md-5 col-sm-6 about_client">
                <div className="page-title text-center">
                  <h4 className="title display-5">Find Us here</h4>
                </div>

                <GoogleMap height={"26vh"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default contact;
