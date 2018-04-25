import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'
import user from '../assets/images/if_user_male2_172626.png'




class Testimonials extends Component {
  render(){
    return(
      <div className="container-fluid py-4">

      <div className="container pt-5">
        <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12 text-white my-auto text-center text-lg-left mx-auto ml-lg-0 mr-lg-auto">
                <h1 className="profile-title display-4 mb-2 font-weight-normal">Testimonials</h1>
                <hr className="profile my-1 pb-1 border-light"/>
                <p className="lead">Eum te percipit platonem gubergren, ne sea dolor possit. </p>
             </div>
        </div>
      </div>

        <div className="container-fluid">
                 <div className="row">
                     <div className="col py-5 mb-4">
                         <div className="carousel slide mb-5" id="carousel-1" data-ride="carousel-1">
                             <div className="carousel-inner text-center my-5" role="listbox" >
                                 <div className="carousel-item active text-center">
                                     <img className="rounded-circle mb-4" src={user} height="100" />
                                     <p className="h2 mb-4 mx-5 w-50 mx-auto">Et vivendo comprehensam eam, dicam impetus et pertinax et vel, fugit</p>
                                     <a className="text-secondary" href="#">Marta Klaus, IBM</a>
                                 </div>
                                 <div className="carousel-item text-center">
                                     <img className="rounded-circle mb-4" src={user} height="100" />
                                     <p className="h2 mb-4 mx-5 w-50 mx-auto">Et vivendo comprehensam eam, dicam impetus et pertinax et vel, fugit</p>
                                     <a className="text-secondary" href="#">Marta Klaus, IBM</a>
                                 </div>
                                 <div className="carousel-item text-center">
                                     <img className="rounded-circle mb-4" src={user} height="100" s />
                                     <p className="h2 mb-4 mx-5 w-50 mx-auto">Et vivendo comprehensam eam, dicam impetus et pertinax et vel, fugit</p>
                                     <a className="text-secondary" href="#">Marta Klaus, IBM</a>
                                 </div>
                             </div>
                             <a className="carousel-control-prev display-4 text-secondary" href="#carousel-1" role="button" data-slide="prev">
                                 <i className="fa fa-angle-left"></i>
                             </a>
                             <a className="carousel-control-next display-4 text-secondary" href="#carousel-1" role="button" data-slide="next">
                                 <i className="fa fa-angle-right"></i>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
      </div>


    )
  }
}

export default Testimonials
