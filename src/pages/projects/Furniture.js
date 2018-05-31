import React, { Component } from "react";
import Link from "gatsby-link";
import PageHeader from "../../components/shared/PageHeader";
import ContactUs from "../../components/shared/ContactUs";
import Projects from "../../components/shared/Projects";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const furnitureItems = [
  {
    number: "01",
    furnitureName: "Furniture 1",
    name: "Furniture Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur1",
    aria: "v-pills-fur1-tab",
    href: "#v-pills-fur1",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-stopwatch",
    image: image1,
    active: true
  },
  {
    number: "02",
    furnitureName: "Furniture 2",
    name: "Furniture Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur2",
    aria: "v-pills-fur2-tab",
    href: "#v-pills-fur2",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-mobile-alt",
    image: image2,
    active: false
  },
  {
    number: "03",
    furnitureName: "Furniture 3",
    name: "Furniture Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur3",
    aria: "v-pills-fur3-tab",
    href: "#v-pills-fur3",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-users",
    image: image3,
    active: false
  },
  {
    number: "04",
    furnitureName: "Furniture 4",
    name: "Furniture Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur4",
    aria: "v-pills-fur4-tab",
    href: "#v-pills-fur4",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.?",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-globe",
    image: image4,
    active: false
  }
];

const FurnitureItem = ({ active, id, href, furnitureName, number, aria }) => (
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

class Furniture extends Component {
  render;
  render() {
    return (
      <div className="pt-5">
        <PageHeader
          title={"Furniture"}
          breadcrumbItem1={"Home /"}
          href1={"../"}
          breadcrumbItem2={"Projects /"}
          href2={"../projects"}
          breadcrumbItem3={"Furniture"}
          active3={"active"}
        />
        <Projects data={furnitureItems}/>
      </div>
    );
  }
}

export default Furniture;
