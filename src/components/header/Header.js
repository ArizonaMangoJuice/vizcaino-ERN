import React, { Component } from 'react'
import smoothScroll from '../common/scrollFunc';


class Header extends Component{
  scrollToCalc = () => {
    smoothScroll.scrollTo('calculator');
  }

  render(){
    return (<nav>
      <a href='' className='links'>Home</a>
      <a href='' className='links'>About</a>
      <a href='' className='links'>Gallery</a>
      <a onClick={this.scrollToCalc} href='#calculator' className='links'>Calculator</a>
    </nav>)
  }
}

export default Header