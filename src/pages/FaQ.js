import React, { Component } from "react";
import Link from "gatsby-link";
import Contact from "../components/Contact";
import PageHeader from "../components/shared/PageHeader";
import ContactUs from "../components/shared/ContactUs";
import Header from '../components/Header'

const faqsProduct = [
  {
    question: "How do I edit a page?",
    answer:
      "1Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-1",
    href: "#collapse-1",
    display: true
  },
  {
    question: "Why was my article deleted?",
    answer:
      "2Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-2",
    href: "#collapse-2",
    display: true
  },
  {
    question: "How do I change the name of an article?",
    answer:
      "3Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-3",
    href: "#collapse-3",
    display: true
  },
  {
    question: "How do I delete my account?",
    answer:
      "4Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-4",
    href: "#collapse-4",
    display: true
  },
  {
    question: "How do I edit a page?",
    answer:
      "5Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-5",
    href: "#collapse-5",
    display: true
  },
  {
    question: "Why was my article deleted?",
    answer:
      "6Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-6",
    href: "#collapse-6",
    display: true
  },
  {
    question: "How do I change the name of an article?",
    answer:
      "7Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-7",
    href: "#collapse-7",
    display: true
  }
];

const faqsSale = [
  {
    question: "Who writes the articles on Wikipedia?",
    answer:
      "1Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-1",
    href: "#collapse-tab2-1",
    display: true
  },
  {
    question: "Who owns Wikipedia?",
    answer:
      "2Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-2",
    href: "#collapse-tab2-2",
    display: true
  },
  {
    question: "Why am I having trouble logging in?",
    answer:
      "3Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-3",
    href: "#collapse-tab2-3",
    display: true
  },
  {
    question: "How can I contact Wikipedia?",
    answer:
      "4Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-4",
    href: "#collapse-tab2-4",
    display: true
  },
  {
    question: "How do I delete my account?",
    answer:
      "5Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-5",
    href: "#collapse-tab2-5",
    display: true
  },
  {
    question: "Who writes the articles on Wikipedia?",
    answer:
      "6Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    id: "collapse-tab2-6",
    href: "#collapse-tab2-6",
    display: true
  }
];

var faqProduct = faqsProduct.reverse();
var faqSale = faqsSale.reverse();

const FaqDiv = faq => (
  <div className="card">
    <div className="card-header panel-heading" role="tab" id="headingOne">
      <a
        role="button"
        className="collapsed text-black"
        data-toggle="collapse"
        data-parent="#accordion"
        data-core=""
        href={faq.href}
        aria-expanded="false"
        aria-controls="collapse1"
      >
        <p className="lead black display-5 mr-3">
          <span className="sign mbr-iconfont mbri-arrow-down inactive" />{" "}
          {faq.question}
        </p>
      </a>
    </div>
    <div
      id={faq.id}
      className="panel-collapse noScroll collapse"
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div className="panel-body p-4">
        <p className="mbr-fonts-style panel-text display-7">{faq.answer}</p>
      </div>
    </div>
  </div>
);

const mappingFunction = faq => (
  <div className="card">
    <div className="card-header panel-heading" role="tab" id="headingOne">
      <a
        role="button"
        className="collapsed text-black"
        data-toggle="collapse"
        data-parent="#accordion"
        data-core=""
        href={faq.href}
        aria-expanded="false"
        aria-controls="collapse1"
      >
        <p className="lead black display-5 mr-3">
          <span className="sign mbr-iconfont mbri-arrow-down inactive" />{" "}
          {faq.question}
        </p>
      </a>
    </div>
    <div
      id={faq.id}
      className="panel-collapse noScroll collapse"
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div className="panel-body p-4">
        <p className="mbr-fonts-style panel-text display-7">{faq.answer}</p>
      </div>
    </div>
  </div>
);

const product = faqsProduct.map(mappingFunction);
var ProductQuestions = product.slice(0, 5);

const sale = faqsSale.map(mappingFunction);
var SaleQuestions = sale.slice(0, 5);

class faQ extends Component {
  render() {
    return (
      <div className="pt-5" id="content-14">
      <Header />
        <PageHeader
          title={"Frequently Asked Questions"}
          breadcrumbItem1={"home /"} href1={"./"}
          breadcrumbItem2={"faQ "} active2={"active"}
        />

        <div className="container pt-5">
          <div className="f_rht ml-3 mr-3 mb-5 text-center">
            <h2 className="display-4 font-400">Have a Question?</h2>
            <div className="container">
              <p className="pt-2 pb-3 text-center">
                Here are the most frequently asked questions at Tatong. If you
                have a question not answered here - or throughout our website -
                please{" "}
                <Link className="" to="./contact">
                  Contact Us
                </Link>.
              </p>
            </div>
          </div>
          <div className="row pt-4 pb-5">
            <div className="col-lg-6 col-md-10 col-sm-12 mx-auto mb-3">
              <h1 className="faq mb-2">Product</h1>
              <hr className="mt-3 mb-4" />
              {ProductQuestions}
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
              <h1 className="faq mb-2">Sales</h1>
              <hr className="mt-3 mb-4" />
              {SaleQuestions}
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    );
  }
}

export default faQ;
