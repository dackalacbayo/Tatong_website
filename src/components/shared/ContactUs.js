import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import ContactFormModal from "../ContactFormModal";

const ContactUs = (props) => {
   return (
     <div className="page-contact" data-stellar-offset-parent="true" >
       <div className="container" >
         <div className="f_vcenter">

         <div className="row pb-4">
           <div className="col-lg-8 col-md-12 col-sm-12 mx-autor">
             <h1 className="md-textcenter font-weight-normal text-uppercase text-white pt-4 style-shadow-light">Make your house into a home</h1>
           </div>
           <div className="md-textcenter col-lg-4 col-md-12 col-sm-12 mx-auto">
             <ContactFormModal />
           </div>
         </div>
        </div>
       </div>
      </div>
  )
}

export default ContactUs
