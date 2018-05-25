import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

const PageHeader = (props) => {
  var { title, breadcrumbItem1,breadcrumbItem2  } = props
   return (
     <div className="page-header" data-stellar-offset-parent="true" >
       <div className="container py-5" >
         <div className="f_vcenter">
           <div className="f_vbottom">
             <h2 className="display-4 text-uppercase text-white font-400 text-center style-shadow">{title}</h2>
           </div>
         </div>
       </div>
      </div>
  )
}

export default PageHeader
