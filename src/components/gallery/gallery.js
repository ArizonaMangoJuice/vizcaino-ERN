import React, { Component } from 'react'
import Images from '../images/Images';


class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      images: [
        'https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/94865/pexels-photo-94865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/262005/pexels-photo-262005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/276696/pexels-photo-276696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ],
      selected: 'dsadsa',
      clicked: false,
      // hovered: []
    }
  }

  onClick(e){
    // console.log('clicked', e.target.src);
    this.setState({
      selected: e.target.src,
      clicked: true
    });
  }

  

  render(){
    let images;
    // this.state.hovered[0] === false ? images = this.state.images.map((image, i) => (
    //   <div id={i} key={i} onClick={(e) => this.onClick(e)} onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={() => this.mouseLeave()} >
    //     <img src={image}/>
    //     <div className={this.state.hovered.length !== 0 && this.state.hovered[1] === i ? '' : 'hidden'}>hello</div>
    //   </div>
    // )) : 
     images = this.state.images.map((image, i) => (
      <Images onClick={this.props.modalPic} id={i} key={i} imgSrc={image} modalPic={this.props.modalPic}/>
      // <div id={i} key={i} onClick={(e) => this.onClick(e)} onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={() => this.mouseLeave()} >
      //   <img src={image}/>
      //   <div className={this.state.hovered[0] === true  ? console.log(this.state.hovered[1]) : console.log(false,i)}>hello</div>
      // </div>
    ))
    return <div className='gallery'>
      {images}
    </div>
  }
}

export default Gallery