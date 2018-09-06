import React, { Component } from 'react'

class WhatWeDo extends Component{
  render(){
    return <React.Fragment>
    <div className='what-we-do-title'>
          <h2>What we specialize in</h2>
    </div>
    <div className='what-we-do-wrapper'>
    <div className='container'> 
    <div className='what-we-do'>
    <div  tabIndex="0" className='what-we-do-card'>
      <i className="far fa-smile what-we-do-icons"></i>
      <p>Satisfaction Guaranteed</p>
    </div>
    <div  tabIndex="0" className='what-we-do-card'>
    <i className="fas fa-bath what-we-do-icons"></i>
    <p>bathroom cleaning</p>            
    </div>
    <div  tabIndex="0" className='what-we-do-card'>
    <i className="far fa-clock what-we-do-icons"></i>
    <p>Fast cleaning</p>        
    </div>
    <div tabIndex="0" className='what-we-do-card'>
    <i className="fas fa-paw what-we-do-icons"></i>
    <p>Pet friendly</p>          
    </div>
    <div tabIndex="0" className='what-we-do-card'>
    <i className="fas fa-dollar-sign what-we-do-icons"></i>
    <p>competitive pricing</p>
    </div>
    <div tabIndex="0"          className='what-we-do-card'>
    <i className="far fa-lightbulb what-we-do-icons"></i>
    <p>Light fixture cleaning</p>
    </div>
  </div>
  </div>
  </div>
  </React.Fragment>
  }
}

export default WhatWeDo