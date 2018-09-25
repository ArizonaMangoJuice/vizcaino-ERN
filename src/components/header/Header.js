import React, { Component } from 'react'
import smoothScroll from '../common/scrollFunc';


class Header extends Component{
  scrollToCalc = () => {
    smoothScroll.scrollTo('calculator');
  }

  scrollToGal = () => {
    smoothScroll.scrollTo('gallery');
  }

  render(){
    return (<nav>
      <a href='' className='links'>Home</a>
      <a href='' className='links'>Call</a>
      <a href='' className='links'>Gallery</a>
      <a onClick={this.scrollToCalc} href='#calculator' className='links'>Calculator</a>
    </nav>)
  }
}

export default Header