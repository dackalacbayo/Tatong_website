import React from 'react'
import { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Link from 'gatsby-link'
import Banner from '../components/Banner'
import CompanyProfile from '../components/CompanyProfile'
import Furnitures from '../components/Furnitures'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

import image  from '../assets/images/zenForce.png'
import image1  from '../assets/images/zenforceBrochure.png'
import 'bootstrap/dist/css/bootstrap.css';

import { Header, Icon, Segment,Label, Dropdown,Grid,Input, TextArea, Divider, Button } from 'semantic-ui-react'

// <section id="" className="">
//       <img className="sec3_img"  src={image1} alt="generic"/>
// </section>

const IndexPage = () => (
    <div>
          <section id="banner" className="">
              <Banner />
          </section>

          <section id="companyProfile" className="">
                <CompanyProfile />
          </section>

          <section id="furnitures" className="">
              <Furnitures />
          </section>

          <section id="projects" className="">
              <Projects />
          </section>

          <section id="testimonials" className="">
              <Testimonials />
          </section>

          <section id="contact" className="">
              <Contact />
          </section>


    </div>
)



export default IndexPage
