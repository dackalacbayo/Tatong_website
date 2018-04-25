import React, { Component } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'


class Contact extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
              <div className="contact col-lg-6 col-md-6 col-md-12 ">
                  <h2 className="display-4 furniture-title-1">Contact Us </h2>
                  <p className="lead furniture">Eum te percipit platonem gubergren, ne sea dolor possit.</p>
              </div>

              <div className="contacts col-lg-6 col-md-6 col-md-12 text-center p-4">
                <div className="bg-opacity-contact">
                <div className="col-lg-10 col-md-6 col-md-12 py-5">
                <form className="pl-5">
                  <div className="form-group text-left w-50">
                  <label for="exampleFormControlInput1">Email Address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                  </div>
                  <div className="form-group text-left w-50">
                  <label for="exampleFormControlInput1">Subject</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                  </div>
                  <div className="form-group text-left">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="panel-button view-btn">
                    <a className="btn btn-secondary submit" href="#"><span>Submit</span></a><br/>
                  </div>
                  </form>

  </div>
                </div>
            </div>



          </div>
      </div>
    )
  }
}

export default Contact
