import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form } from "reactstrap";
import {Button,Segment} from "semantic-ui-react";
import image1 from "../assets/images/image2.jpg";
import logo from "../assets/images/image3.jpg";
import ContactForm from "../components/shared/ContactForm";

class ContactFormModal extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: true
    });
  };
  close = () => {
    this.setState({ modal: false });
  };
  onChange = (e, { value, name }) => this.setState({ [name]: value });
  sendContact = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="pt-4">
        <Button type="button" className="btn mr-2 btn-lg" onClick={this.toggle}>
          {" "}
          Inquire Now
        </Button>
        <Modal
          className="modal-lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.close}>
            <div className="row text-center">
              <div className="col">
                <h5 className="h5 text-white">Send Us a Message</h5>
              </div>
            </div>
          </ModalHeader>
          <form
            method="POST"
            action="https://formspree.io/dackalacbayo@gmail.com"
          >
            <ModalBody>
              <Segment.Group horizontal>
                <Segment>
                  <div>
                    <div className="row">
                      <ContactForm col="col-lg-6 pb-4"/>
                      <div className="contact-address col-lg-6 ">
                        <h5 className="h5 pt-2">Contact Info</h5>
                        <div className="single-contact-info d-flex h-auto">
                          <div className="contact-icon mr-15 ">
                            <div className="address icon-box mb-4">
                              <h2 className="featurette-heading py-2 pl-2">
                                <i className="address fas fa-map-marker-alt" />
                              </h2>
                            </div>
                          </div>
                          <h1 className="text-left lead black small ml-4">
                          <label className="col-form-label text-uppercase">
                            Address
                          </label><br/>
                            3201 Antel Global Corporate Center, J. Vargas Ave.,
                            Ortigas Center, Pasig City
                          </h1>
                        </div>
                        <div className="single-contact-info d-flex h-auto">
                          <div className="contact-icon mr-15 ">
                            <div className="address icon-box mb-4">
                              <h2 className="featurette-heading py-2 pl-2">
                                <i className="address fas fa-phone-volume" />
                              </h2>
                            </div>
                          </div>
                          <h1 className="text-left lead black small ml-4">
                          <label className="col-form-label text-uppercase">
                            phone
                          </label><br/>
                            0000-000
                          </h1>
                        </div>
                        <div className="single-contact-info d-flex h-auto">
                          <div className="contact-icon mr-15 ">
                            <div className="address icon-box mb-4">
                              <h2 className="featurette-heading py-2 pl-2">
                                <i className="address fas fa-at" />
                              </h2>
                            </div>
                          </div>
                          <h1 className="text-left lead black small ml-4">
                          <label className="col-form-label text-uppercase">
                            website
                          </label><br/>
                            www.sample.com
                          </h1>
                        </div>
                        <div className="single-contact-info d-flex h-auto">
                          <div className="contact-icon mr-15 ">
                            <div className="address icon-box mb-4">
                              <h2 className="featurette-heading py-2 pl-2">
                                <i className="address fas fa-envelope" />
                              </h2>
                            </div>
                          </div>
                          <h1 className="text-left lead black small ml-4">
                          <label className="col-form-label text-uppercase">
                            email
                          </label><br/>
                            sample@sample.ph
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </Segment>
              </Segment.Group>
            </ModalBody>
            <ModalFooter />
          </form>
        </Modal>
      </div>
    );
  }
}

export default ContactFormModal;
