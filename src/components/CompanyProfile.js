import React, { Component } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const items = [
  {
    icon: "fas fa-home",
    title: "Professional Build",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-truck",
    title: "We Deliver Quality",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-clock",
    title: "Always On Time",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-thumbs-up",
    title: "We Are Pasionate",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  }
];

const Items = ({ icon, title, desc }) => (
  <div className="col-md-3 col-sm-6 builder">
    <div className="icon-box-wrapper">
      <div className="square-icon-box is-landing primary">
        <div className="icon-box-wrapper">
          <div className="icon-box icon-square icon-circle mb-4">
            <h2 className="featurette-heading py-2 pl-2">
              <i className={icon} />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h4 className="text-center">{title}</h4>
    <p className="text-center">{desc}</p>
  </div>
);

class CompanyProfile extends Component {
  render() {
    return (
      <div className="container py-5">
        <section className="professional_builder row py-5">
          <div className="container">
            <div className="row builder_all pb-5">
              {items.map(item => <Items {...item} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CompanyProfile;
