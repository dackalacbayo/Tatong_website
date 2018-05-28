import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

const PageHeader = (props) => {
  var { title, breadcrumbItem1,breadcrumbItem2  } = props
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
                <li className="breadcrumb-item"><a className="breadcrumb-item" href="#">{breadcrumbItem1}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{breadcrumbItem2}</li>
              </ol>
            </nav>
          </div>
         </div>
       </div>
      </div>
  )
}

export default PageHeader
