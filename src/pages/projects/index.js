import React, { Component } from "react";
import Link from "gatsby-link";
import { Button } from "semantic-ui-react";
import PageHeader from "../../components/shared/PageHeader";
import ContactUs from "../../components/shared/ContactUs";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import Header from '../../components/Header'

const project = [
  {
    id: "furniture",
    title: "Furniture",
    href: "./projects/Furniture",
    icon: "fas fa-bed",
    desc:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4
  },
  {
    id: "lighting",
    title: "Lighting",
    href: "./projects/Lighting",
    icon: "fas fa-lightbulb",
    desc:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4
  },
  {
    id: "interior",
    title: "Interior Design",
    href: "./projects/Interior",
    icon: "fas fa-home",
    desc:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4
  },
  {
    id: "build",
    title: "Build",
    href: "./projects/Build",
    icon: "fas fa-gavel",
    desc:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4
  }
];

const ProjectItems = ({
  id,
  title,
  image1,
  image2,
  image3,
  image4,
  desc,
  href,
  icon
}) => (
  <section className="about_us_area row py-5" id={id}>
    <div className="container">
      <div className="row">
        <div className="furniture col-lg-6 col-md-6 text-center pt-5">
          <div className="subtittle ">
            <h1 className="title-project text-uppercase">
              <i className={`furniture ${icon}`} />
              {title}
            </h1>
          </div>
          <p className="pt-4 pb-3 text-justify">{desc}</p>
          <Link to={href}>
            <Button type="button" className="btn mr-2 btn-lg mb-3">
              View More
            </Button>
          </Link>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="container">
            <div className="row">
              <ul id="rig">
                <li>
                  <a className="rig-cell" href={href}>
                    <span className="rig-img">
                      <img
                        className="img-height py-2"
                        src={image1}
                        height="220"
                      />
                    </span>
                    <span className="rig-overlay" />
                  </a>
                </li>
                <li>
                  <a className="rig-cell" href={href}>
                    <span className="rig-img" />
                    <img
                      className="img-height py-2"
                      src={image2}
                      height="220"
                    />
                    <span className="rig-overlay" />
                  </a>
                </li>
                <div className="w-100" />
                <li>
                  <a className="rig-cell" href={href}>
                    <span className="rig-img">
                      <img
                        className="img-height py-2"
                        src={image3}
                        height="220"
                      />
                    </span>
                    <span className="rig-overlay" />
                  </a>
                </li>
                <li>
                  <a className="rig-cell" href={href}>
                    <span className="rig-img">
                      <img
                        className="img-height py-2"
                        src={image4}
                        height="220"
                      />
                    </span>
                    <span className="rig-overlay" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NavItem = ({title, id}) => (
  <li className="nav-item">
    <Link className="nav-link" to={`#${id}`} >
      {title}
    </Link>
  </li>
)

class projects extends Component {
  render() {
    return (
      <div className="pt-5" id="content-14">
      <Header />
        <PageHeader
          title={"Projects of Tatong"}
          breadcrumbItem1={"Home /"}
          href1={"../"}
          breadcrumbItem2={"Projects"}
          active2={"active"}
        />
        <div className="container pt-5">
          <ul className="nav nav-tabs nav-justified flex-nowrap" role="tablist">
            {project.map((items) => <NavItem {...items} />)}
          </ul>

          {project.map(item => <ProjectItems {...item} />)}
        </div>

        <ContactUs />
      </div>
    );
  }
}

export default projects;
