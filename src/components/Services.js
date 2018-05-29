import React, { Component } from "react";
import Link from "gatsby-link";
import {Header,Icon,Segment,Label,Dropdown,Grid,Input,TextArea,Divider,Button,Select} from "semantic-ui-react";
import image1 from "../assets/images/image4.jpg";
import image2 from "../assets/images/image4_2.jpg";
import image3 from "../assets/images/image5.jpg";
import image4 from "../assets/images/image6.jpg";

const items = [
  {
    title: "furniture",
    href: "./projects#furniture",
    image: image1,
    desc:
      "Some quick example text to build on the card title and make up the bulk of the cards content"
  },
  {
    title: "lighting",
    href: "./projects#lighting",
    image: image2,
    desc:
      "Some quick example text to build on the card title and make up the bulk of the cards content"
  },
  {
    title: "interior design",
    href: "./projects#interior",
    image: image3,
    desc:
      "Some quick example text to build on the card title and make up the bulk of the cards content"
  },
  {
    title: "build",
    href: "./projects#build",
    image: image4,
    desc:
      "Some quick example text to build on the card title and make up the bulk of the cards content"
  }
];

const ServiceItem = ({ title, href, image, desc }) => (
  <div className="col-md-3 col-sm-6 mt-2 construction">
    <div className="card border-0">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to={href}>
          <Button type="button" className="btn mr-2 btn-lg mt-3">
            View More
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

class Services extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="what_we_area row pb-5">
        <div className="container mb-3">
          <div className="page-title text-center">
            <h4 className="title text-white display-5">Our Services</h4>
          </div>
        </div>
          <div className="container mb-5">
          <div className="subtittle ">
            <h2 className="display-4 text-uppercase text-white font-400">what we offer</h2>
              <div className="divider-white text-center" />
              <p className="pt-5 pb-3 text-center text-white">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which
                dont look even slightly believable.
              </p>
          </div>
            <div className="row pt-5">
              {items.map(item => <ServiceItem {...item} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
