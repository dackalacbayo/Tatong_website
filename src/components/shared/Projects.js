import React, { Component } from "react";
import Link from "gatsby-link";
import PageHeader from "./PageHeader";
import ContactUs from "./ContactUs";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";


const NavItem = ({ active, id, href, furnitureName, number, aria }) => (
  <div
    className={active ? "nav-link active" : "nav-link"}
    id={aria}
    data-toggle="pill"
    href={href}
    role="tab"
    aria-controls={id}
    aria-selected={active}
  >
    <span>{number}</span> {furnitureName}
  </div>
);

const TabItem = ({ active, id, name, desc1, desc2, aria, href, image, materials, dimensions }) => (
  <div
    className={active ? "tab-pane fade show active" : "tab-pane fade"}
    role="tabpanel"
    id={id}
    aria-labelledby={aria}
  >
    <span className="icon flaticon-hospital" />
    <h1 className="text-uppercase">{name}</h1>
    <p className="desc2 text-justify mt-3">{desc2}</p>
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <img className="img-fluid py-3" src={image} alt="image" />
      </div>

      <div className="col-lg-6 col-md-12">
        <div className="container py-3">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active text-black"
                role="tabs"
                data-toggle="tabs"
              >
                <strong className="desc2 text-justify mt-3">
                  Specifications
                </strong>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <ul className="a">
              <li>
                <strong>Material</strong> <br />
                <ul className="specs py-2">
                  <li>{materials}</li>
                </ul>
              </li>
              <li>
                <strong>Dimensions</strong> <br />
                <ul className="specs py-2">
                  <li>{dimensions}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = (props) => {
  var { data } = props
  return (
    <div className="pt-5">

      <div className="container">
        <div className="row justify-content-center text-center section-intro">
          <div className="col-12 col-md-9 col-lg-10 pt-5 pb-3">
            <div className="page-title text-center">
              <h5 className="title">Projects</h5>
              <div className="space-10" />
            </div>
            <h2 className="display-4 text-uppercase font-400">Creative Meets Living</h2>
            <div className="divider-black text-center" />
          </div>
        </div>
        <div className="row mt-4">
          <section className="section custom-tabs">
            <div className="container">
              <div className="row mb-5 py-5">
                <div className="col-md-4 border-right element-animate">
                  <div
                    className="nav flex-column nav-pills mt-4"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    { (data)
                      .filter(items => {
                        return items.display === true;
                      })
                      .map(items => {
                        return <NavItem {...items} />;
                      })}
                  </div>
                </div>
                <div className="col-md-1" />
                <div className="col-md-7 element-animate">
                  <div className="tab-content" id="v-pills-tabContent">
                    { (data)
                      .filter(item => {
                        return item.display === true;
                      })
                      .map(item => {
                        return <TabItem {...item} />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}


export default Projects
