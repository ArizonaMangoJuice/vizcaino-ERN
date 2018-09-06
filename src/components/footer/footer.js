import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return <footer>
      <div className='footer-social-buttons'>
        <a href=''><i className="fab fa-twitter"></i></a>
        <a href=''><i className="fab fa-facebook-f"></i></a>
        <a href=''><i className="fas fa-envelope"></i></a>
      </div>
      <p>© VizcainERN</p>
    </footer>
  }
}

export default Footer