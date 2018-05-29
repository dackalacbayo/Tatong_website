import React, { Component } from 'react'
import Link from "gatsby-link";
import { Icon } from 'semantic-ui-react'

const PageHeader = (props) => {
  var { title, breadcrumbItem1, breadcrumbItem2, breadcrumbItem3, href1, href2, href3, active1, active2, active3} = props
   return (
     <div className="page-header" data-stellar-offset-parent="true" >
       <div className="container py-3" >
         <div className="f_vcenter">
           <div className="f_vbottom">
             <h2 className="display-4 text-uppercase text-white font-400 style-shadow">{title}</h2>
           </div>
           <div className ="f_rht pb-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className={`breadcrumb-item ${active1}`} to={href1}>{breadcrumbItem1}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className={`breadcrumb-item ${active2}`} to={href2}>{breadcrumbItem2}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className={`breadcrumb-item ${active3}`} to={href3}>{breadcrumbItem3}</Link>
                </li>
            </ol>
            </nav>
          </div>
         </div>
       </div>
      </div>
  )
}

export default PageHeader
