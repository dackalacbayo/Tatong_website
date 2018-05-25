import React, { Component } from "react";
import user from "../assets/images/if_user_male2_172626.png";

const testimonials = [
  {
    image: user,
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    name: "Marta Markes",
    position: "Manager",
    active: true,
    display: true
  },
  {
    image: user,
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    name: "Valentin Kim",
    position: "Manager",
    active: false,
    display: true
  },
  {
    image: user,
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    name: "Mark Markus",
    position: "Manager",
    active: false,
    display: true
  }
];

const TestimonialsDiv = ({ active, image, text, name, position }) => (
  <div
    className={
      active ? "carousel-item text-center active" : "carousel-item text-center"
    }
  >
    <p className="testimonials lhtext-center mx-5 w-50 mx-auto">
      <i className="fa fa-quote-right text-white" /> {text}
    </p>
    <img className="rounded-circle mb-4" src={image} height="100" />
    <br />
    <a className="client-name text-uppercase">{name}</a>
    <br />
    <a className="text-secondary">{position}</a>
    <br />
    <div className="py-1 mt-5" />
    <p className="display-4 mb-4 text-secondary" />
  </div>
);

class Testimonials extends Component {
  render() {
    return (
      <div className="container-fluid py-2">
        <div className="container pt-5">
          <div className="row">
            <div className="container mb-3">
              <div className="page-title text-center">
                <h4 className="title dark display-5">Testimonials</h4>
              </div>
              <div className="subtittle text-center mt-3">
                <h2 className="display-4 text-uppercase font-400">our happy clients</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col py-3">
              <div
                id="carouselExampleIndicators"
                className="carousel slide mt-5"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  {testimonials
                    .filter(tes => {
                      return tes.display === true;
                    })
                    .map(tes => {
                      return <TestimonialsDiv {...tes} />;
                    })}
                </div>
                <a
                  className="carousel-control-prev display-4 text-secondary"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-control-next display-4 text-secondary"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
              <div
                className="carousel slide mb-5"
                id="carousel-1"
                data-ride="carousel-1"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
