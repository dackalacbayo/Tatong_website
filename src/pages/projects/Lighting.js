import React, { Component } from "react";
import Link from "gatsby-link";
import PageHeader from "../../components/shared/PageHeader";
import ContactUs from "../../components/shared/ContactUs";
import Projects from "../../components/shared/Projects";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const lightingItems = [
  {
    number: "01",
    furnitureName: "Lighting 1",
    name: "Lighting Name",
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
    furnitureName: "Lighting 2",
    name: "Lighting Name",
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
    furnitureName: "Lighting 3",
    name: "Lighting Name",
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
    furnitureName: "Lighting 4",
    name: "Lighting Name",
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


class Lighting extends Component {
  render;
  render() {
    return (
      <div className="pt-5">
        <PageHeader
          title={"Lighting"}
          breadcrumbItem1={"Home /"}
          href1={"../"}
          breadcrumbItem2={"Projects /"}
          href2={"../projects"}
          breadcrumbItem3={"Lighting"}
          active3={"active"}
        />
        <Projects data={lightingItems} />
      </div>
    );
  }
}

export default Lighting;
