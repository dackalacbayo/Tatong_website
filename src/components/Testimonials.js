import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'
import user from '../assets/images/if_user_male2_172626.png'

const testimonials = [
  {image:user,text:'Et vivendo comprehensam Impetus et Impetus et pe pe ',name:'Marta Markes',active:true, display:true},
  {image:user,text:'Eam, dicam impetus et Impetus et pe Impetus et pe t',name:'Valentin Kim',active:false, display:true},
  {image:user,text:'Impetus et pertinax etImpetus et pe Impetus et pe vel, fugit',name:'Mark Markus',active:false, display:true},
]

const TestimonialsDiv = ({active, image, text, name}) => (
  <div className = {active ? "carousel-item text-center active" : "carousel-item text-center"} >
    <img className="rounded-circle mb-4" src={image} height="100" />
    <p className="h5 mb-4 mx-5 w-50 mx-auto">{text}</p>
    <a className="text-secondary" href="#">{name}</a>
  </div>
)


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
                         {testimonials.filter((tes) => {return (tes.display === true)})
                                  .map((tes) => {return <TestimonialsDiv {...tes}/>})}
                       </div>
                       <a className="carousel-control-prev display-4 text-secondary" href="#carousel-1" role="button" data-slide="prev">
                           <i className="fa fa-angle-left"></i></a>
                       <a className="carousel-control-next display-4 text-secondary" href="#carousel-1" role="button" data-slide="next">
                           <i className="fa fa-angle-right"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}

export default Testimonials
