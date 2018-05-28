import React, { Component } from "react";
import Link from "gatsby-link";
import PageHeader from '../components/shared/PageHeader'
import ContactUs from "../components/shared/ContactUs";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

class projects extends Component {
  render() {
    return (
      <div className="pt-5" id="content-14">
          <PageHeader title={"Projects of Tatong"} breadcrumbItem1={"Home"} breadcrumbItem2={"Projects"}/>

        <div className="container">

        <section className="about_us_area row py-5" id="furniture">
          <div className="container">
          <div className="row" >
           <div className="furniture col-lg-6 col-md-6">
           <div className="subtittle ">
             <h2 className="title-about display-4 text-uppercase">Furniture</h2>
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
           </div>
           <div className="col-lg-6 col-md-6">
           <div className="container">
             <div className="row">
             <ul id="rig">
               <li>
                   <a className="rig-cell" href="#">
                       <span className="rig-img">
                       <img className="img-fluid py-2" src={image3} height="220"/></span>
                       <span className="rig-overlay"></span>
                   </a>
               </li>
               <li>
                   <a className="rig-cell" href="#">
                       <span className="rig-img"></span>
                       <img className="img-fluid py-2" src={image3} height="220"/>
                       <span className="rig-overlay"></span>
                   </a>
               </li>
               <div className="w-100"></div>
               <li>
                   <a className="rig-cell" href="#">
                     <span className="rig-img">
                     <img className="img-fluid py-2" src={image3} height="220"/></span>
                     <span className="rig-overlay"></span>
                   </a>
               </li>
               <li>
                   <a className="rig-cell" href="#">
                     <span className="rig-img">
                     <img className="img-fluid py-2" src={image3} height="220"/></span>
                     <span className="rig-overlay"></span>
                   </a>
               </li>
           </ul>
             </div>
           </div>
         </div>
       </div>
      </div>
    </section>

      <section className="about_us_area row py-5" id="lighting">
        <div className="container">
        <div className="row" >
         <div className="furniture col-lg-6 col-md-6">
         <div className="subtittle ">
           <h2 className="title-about display-4 text-uppercase">lighting</h2>
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
         </div>
         <div className="col-lg-6 col-md-6">
         <div className="container">
           <div className="row">
           <ul id="rig">
             <li>
                 <a className="rig-cell" href="#">
                     <span className="rig-img">
                     <img className="img-fluid py-2" src={image3} height="220"/></span>
                     <span className="rig-overlay"></span>
                 </a>
             </li>
             <li>
                 <a className="rig-cell" href="#">
                     <span className="rig-img"></span>
                     <img className="img-fluid py-2" src={image3} height="220"/>
                     <span className="rig-overlay"></span>
                 </a>
             </li>
             <div className="w-100"></div>
             <li>
                 <a className="rig-cell" href="#">
                   <span className="rig-img">
                   <img className="img-fluid py-2" src={image3} height="220"/></span>
                   <span className="rig-overlay"></span>
                 </a>
             </li>
             <li>
                 <a className="rig-cell" href="#">
                   <span className="rig-img">
                   <img className="img-fluid py-2" src={image3} height="220"/></span>
                   <span className="rig-overlay"></span>
                 </a>
             </li>
         </ul>
           </div>
         </div>
       </div>
     </div>
    </div>
  </section>



        </div>
        <ContactUs />
      </div>
    );
  }
}

export default projects;
