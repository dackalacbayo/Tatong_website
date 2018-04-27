import React , {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';


const faqsProduct = [
  {question:'How do I edit a page?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-1',href:'#collapse-1', display:true},
  {question:'Why was my article deleted?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-2',href:'#collapse-2', display:true},
  {question:'How do I change the name of an article?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-3',href:'#collapse-3', display:true},
  {question:'How do I delete my account?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-4',href:'#collapse-4', display:true},
]

const faqsSale = [
  {question:'Who writes the articles on Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-5',href:'#collapse-5', display:true},
  {question:'Who owns Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-6',href:'#collapse-6', display:true},
  {question:'Why am I having trouble logging in?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-7',href:'#collapse-7', display:true},
  {question:'How can I contact Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-8',href:'#collapse-8', display:true},
  {question:'How do I delete my account?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-9',href:'#collapse-9', display:true},
  {question:'Who writes the articles on Wikipedia?', answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',id:'collapse-10',href:'#collapse-10', display:true},
]

const FaqDiv = ({question, answer, id, href}) => (
  <div className="mb-4" >
      <h5>
          <i className="fas fa-caret-right"></i><a className="text-dark" data-toggle="collapse" href={href} aria-expanded="false" aria-controls={id}>{question}</a>
      </h5>
      <p className="collapse m-3 p-0 mr-5" id={id}>{answer}</p>
  </div>
)

class FaQ extends Component {
  render(){
    return(
      <div className="pt-5 pb-5 mb-2" id="content-14">
                  <div className="container pt-5">
                      <div className="row">
                          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                          <h1 className="profile-title display-4 mb-2 font-weight-normal">Questions</h1>
                          <p className="lead">Frequently asked questions</p><br/>
                              <h1 className="faq mb-2">Product</h1>
                              <hr className="mt-3 mb-4"/>
                              {faqsProduct.filter((faq) => {return (faq.display === true)})
                                       .map((faq) => {return <FaqDiv {...faq}/>})}

                              <h1 className="faq mb-2 mt-5">Sales</h1>
                              <hr className="mt-3 mb-4"/>

                              {faqsSale.filter((faq) => {return (faq.display === true)})
                                       .map((faq) => {return <FaqDiv {...faq}/>})}
                          </div>
                      </div>
                  </div>
              </div>
    )
  }
}


export default FaQ
