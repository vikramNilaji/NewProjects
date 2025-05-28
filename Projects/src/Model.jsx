import React from 'react'

const Model = ({id,header,body,footer}) => {
  return (
    <div id ={id || 'Model'} className="Model">
 <div className='content'>
 <div className='header'>
  <span className='close-model-icon'>&times;</span>
  <h2>{header ? header : 'Header'}</h2>
 </div>
  <div className='body'>
    {body ? (body) : (<div> <p>this is our model body</p> </div>) }
  </div>
  <div className='footer'>
    {footer ? footer : <h2> Footer</h2> }
  </div>
  </div>
      
      
    </div> 
  )
}

export default Model
