import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'



class ContactUs extends Component {
  render(){
    return(
      <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Need a Free Demo & Quotation ?</h1>
            <p className="lead text-muted">ZenForce offers a free demo and quotation for you. Just fill up the form and send us a message. </p>
            <p>
              <ContactForm />
            </p>

          </div>
        </section>
    )
  }
}

export default ContactUs
