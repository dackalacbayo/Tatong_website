import React, { Component } from "react";
import Link from "gatsby-link";

const socialIcons = [
  { icon: "fab fa-twitter", name: "Twitter", href: "www.twitter.com" },
  { icon: "fab fa-facebook", name: "Facebook", href: "www.facebook.com" },
  { icon: "fab fa-instagram", name: "Instagram", href: "www.instagram.com" },
  { icon: "fab fa-github", name: "Github", href: "www.github.com" }
];

const featuresData = [
  {name:'Cool stuff', href:'www.sample.com'},
  {name:'Random feature', href:'www.sample.com'},
  {name:'Team feature', href:'www.sample.com'},
  {name:'Stuff for developers', href:'www.sample.com'},
  {name:'Another one', href:'www.sample.com'},
  {name:'Last time', href:'www.sample.com'},
]

const resourcesData = [
  {name:'Resource', href:'www.sample.com'},
  {name:'Resource name', href:'www.sample.com'},
  {name:'Another resource', href:'www.sample.com'},
  {name:'Final resource', href:'www.sample.com'},
]

const aboutData = [
  {name:'Team', href:'www.sample.com'},
  {name:'Locations', href:'www.sample.com'},
  {name:'Privacy', href:'www.sample.com'},
  {name:'Terms', href:'www.sample.com'},
]

const SocialIcons = ({ icon, href }) => (
  <li className="socialIcons">
    <a href={href} className={icon}>
      <span className="label"> </span>
    </a>
  </li>
);

const FooterInfo = ({name, href}) => (
  <li>
    <a className="text-muted" href={href}>
      {name}
    </a>
  </li>
)

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer className="container py-2 pb-5">
          <div className="row footer">
            <div className="col-6 col-md">
              <ul className="list-unstyled text-small">
                <a href="#">
                  <h2 className="font-weight-normal text-white">Tatong</h2>
                </a>
                <br />
                <small className="d-block mb-3 text-muted">
                  &copy; 2017-2018
                </small>
              </ul>
            </div>

            <div className="col-12 col-lg-3 py-4">
              <i className="footer fas fa-at" />
              <a href="http://sample.com/">
                <small className="text-muted site"> www.sample.com</small>
              </a><br />
              <i className="footer fas fa-phone" />
              <small className="text-muted"> 000-0000 </small><br />
              <i className="footer fas fa-envelope" />
              <small className="text-muted">info@sample.ph</small><br />
              <hr />
              <ul className="list-unstyled text-small icons">
                {socialIcons.map(item => <SocialIcons {...item} />)}
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                {featuresData.map(feature => <FooterInfo {...feature} />)}
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                {resourcesData.map(resource => <FooterInfo {...resource} />)}
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                  {aboutData.map(about => <FooterInfo {...about} />)}
              </ul>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
