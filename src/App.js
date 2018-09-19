import React, { Component } from 'react';
// import WheelReact from 'wheel-react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/gallery';
import WhatWeDo from './components/what-we-do/whatWeDo';
import Calculator from './components/calculator/Calculator';
import smoothScroll from './components/common/scrollFunc';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: null,
      modal: false,
      loading: false,
      error: null,
      completed: false
    };
  }

  sendData = () => {
    //currently doesnt send anything just testing 
    console.log('hello');
    this.setState({
      loading: true
    });

    fetch('http://localhost:8080/email')
      .then(res => res.json(res))
      .then(result => this.setState({
        loading:false,
        completed: true
      }))
      .catch( error => this.setState({
        loading:false,
        error
      }))
  }

  scrollToCalc = () => {
    smoothScroll.scrollTo('calculator');
  }

  test = (e) => {
    let imageModal = e.target.parentNode.dataset.images;
    
    this.setState({
      content: imageModal,
      modal: true
    });
    // console.log(x);
  }

  closeModal = () => {
    this.setState({
      content: null,
      modal: false
    })
  }

  render() {
    return (
      <div className="Container">
      <div className={`modal ${this.state.modal ? '' : 'hidden'}`}>
        <div className='inner-modal'>
          <img src={this.state.content} alt='gallery' />
          <div className='exit' tabIndex={1} onClick={this.closeModal}>
              <span>X</span>
          </div>
        </div>
      </div>
        <section className='banner'>
          <Header />
          <div className='banner-content'>
            <h1>VizcainoERN</h1>
            <p>Residential house cleaning at affordable prices.</p>
            <a onClick={this.scrollToCalc} href='#calculator' className='calculator-button'>Check Prices <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </section>
        <div className='who-we-are'>
          <div className='container'>
          <img src='https://images.pexels.com/photos/1321730/pexels-photo-1321730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='lady cleaning'/>
          <div className='who-we-are-content'>
            <h2>Who we are</h2>
            <p>
              We are a small cleaning company based in Denver, CO. 
              Our team consits of hard workers striving to have houses as clean as possible.
              We believe that the best way to master a job is to do it repeatedly and work on getting better at it over time.
              Our cleaning team is the most valuable asset we have. All our cleaners work with us on long-term basis.
            </p>
            </div>
          </div>
        </div>
        <WhatWeDo />
        <div className='gallery-title'>
          <h2>Houses we've cleaned</h2>
        </div>
        <Gallery modalPic={this.test}/>
        <Calculator sendData={this.sendData} loading={this.state.loading} completed={this.state.completed}/>
        <Footer />
      </div>
    );
  }
}

export default App;
