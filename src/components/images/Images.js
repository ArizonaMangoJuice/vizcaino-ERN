import React, { Component } from 'react'

class Images extends Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: []
    }
  }

  mouseEnter(e){
    // console.log(e.currentTarget.id);
    this.setState({
      hovered: [true, e.currentTarget.id]
    })
  }

  mouseLeave(){
    this.setState({
      hovered: []
    });
  }

  render(){
    // console.log(this.props.modalPic);
    return <div className='gallery-image'
      id={this.props.id}  
      // onClick={(e) => this.onClick(e)} 
      onMouseEnter={(e) => this.mouseEnter(e)} 
      onMouseLeave={() => this.mouseLeave()} 
      >
    <img src={this.props.imgSrc}/>
    <div  data-images={this.props.imgSrc}
      className={this.state.hovered[0] === true  
      ? 'image-info' 
      : 'hidden'}>
        <h2>Image {this.props.id}</h2>
        <p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
        <button tabIndex={1} onClick={(e) => this.props.modalPic(e)}  className='image-detail'>Bigger image</button>
      </div>
  </div>
  }
}

export default Images