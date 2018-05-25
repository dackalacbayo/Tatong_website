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
import image1 from "../assets/images/image4.jpg";
import image2 from "../assets/images/image4_2.jpg";
import image3 from "../assets/images/image5.jpg";
import image4 from "../assets/images/image6.jpg";


const items = [
  {
    icon: "fas fa-home",
    title: "Professional Build",
    image: image1,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-truck",
    title: "We Deliver Quality",
    image: image2,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-clock",
    title: "Always On Time",
    image: image3,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    icon: "fas fa-thumbs-up",
    title: "We Are Pasionate",
    image: image4,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  }
];

const Items = ({ icon, title, desc, image }) => (
  <div className="col-md-3 col-sm-6 builder">
    <div className="icon-box-wrapper py-3">
      <div className="square-icon-box is-landing primary">
        <div className="icon-box-wrapper">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-feature">
          <div className="icon-box icon-square icon-circle mb-4">
            <h3 className="featurette-heading py-2">
              <i className={icon} />
            </h3>
          </div>
        </div>
      </div>
    </div>
    <h4 className="text-center">{title}</h4>
    <p className="text-center">{desc}</p>
  </div>
  </div>
);

class Features extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="services row pb-5">
          <div className="container mb-3">
            <div className="page-title text-center">
              <h4 className="title display-5">Our Features</h4>
            </div>
          </div>
          <div className="container mb-5">
            <div className="subtittle ">
              <h2 className="display-4 text-uppercase font-400">why choose us</h2>
              <div className="divider-black text-center" />
              <p className="pt-5 pb-3 text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. hidden in the middle of text.
              </p>
            </div>
            <div className="row pt-5">
              {items.map(item => <Items {...item} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
