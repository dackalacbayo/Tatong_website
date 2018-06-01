import React from "react";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Link from "gatsby-link";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import "bootstrap/dist/css/bootstrap.css";

import {Header,Icon,Segment,Label,Dropdown,Grid,Input,TextArea,Divider,Button} from "semantic-ui-react";

const IndexPage = () => (
  <div>
    <section id="banner" className="">
      <Banner />
    </section>

    <section id="aboutUs" className="">
      <AboutUs />
    </section>

    <section id="furnitures" className="">
      <Services />
    </section>

    <section id="projects" className="">
      <Features />
    </section>

    <section id="testimonials" className="">
      <Testimonials />
    </section>

    <section id="contact" className="">
      <Contact />
    </section>
  </div>
);

export default IndexPage;
