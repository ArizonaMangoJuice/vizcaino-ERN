import React, { Component } from 'react'
let currentDate = new Date();
let month = currentDate.getUTCMonth() + 1;
let day = currentDate.getUTCDate();
let year = currentDate.getUTCFullYear();

currentDate = `${year}-${month.length > 1 ? '' : '0'}${month}-${day.length > 1 ? '' : '0'}${day}`.toString();


export default class Calculator extends Component{
  constructor(props){
    super(props);
    this.state = {
      price: 0,
      squareFeet: 0,
      date: currentDate,
      size: 'less than 1200 sq ft',
      bathrooms: 1,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      apt: '',
      state: '', 
      zipCode: ''
    }
  }

  squareFeet = (e) => {
    console.log(e.target.value);
    this.setState({
      squareFeet: e.target.value
    })
  }

  updateDate = (e) => {
    let date = e.target.value;
    this.setState({
      date
    })
  }

  size = (e) => {
    let size = e.target.value;
    this.setState({
      size
    })
  }

  bathrooms = (e) => {
    let bathrooms = parseInt(e.target.value);
    this.setState({
      bathrooms
    })
  }

  changeString(name,e){
    let string = e.target.value;
    let property = name;
    let obj = {
      [property]: string
    };
    this.setState(obj)
  }

  render(){
    console.log(this.state.date);
    return <div className='calculator'>
      <div className='output-container'>
        <div class='scale-in-ver-top'></div>
      </div>
      <div className='price-result'>
        <p>
          ${this.state.price}
        </p>
      </div>
      <div>
        <div className='size-and-bathrooms'>
          <select onChange={this.size}>
            <option value='less than 1200 sq ft'>less than 1200 sq ft</option>
            <option value='1200 to 1400 sq ft'>1200 to 1400 sq ft</option>
            <option value='1400 to 2000 sq ft'>1400 to 2000 sq ft</option>
            <option value='2000 t0 2400 sq ft'>2000 t0 2400 sq ft</option>
            <option value='2400 to 2800 sq ft'>2400 to 2800 sq ft</option>
            <option value='2800 to 3200 sq ft'>2800 to 3200 sq ft</option>
            <option value='3200 to 3600 sq ft'>3200 to 3600 sq ft</option>
          </select>

          <select onChange={this.bathrooms}>
            <option value='1 Bathroom'>1 Bathroom</option>
            <option value='2 Bathroom'>2 Bathroom</option>
            <option value='3 Bathroom'>3 Bathroom</option>
            <option value='4 Bathroom'>4 Bathroom</option>
            <option value='5 Bathroom'>5 Bathroom</option>
            <option value='6 Bathroom'>6 Bathroom</option>
          </select>

        </div>


        <div className='frequency'>
          <button>
            <span>One Time Cleaning</span>
          </button>
          <button>
            <span>Every Week</span>
          </button>
          <button>
            <span>Every 2 Weeks</span>
          </button>
          <button>
            <span>Every 4 Weeks</span>
          </button>
        </div>

        <div className='Extras'>
          <button>
            <span>Initial Clean</span>
          </button>
          <button>
            <span>Deep Clean</span>
          </button>
          <button>
            <span>Inside Windows</span>
          </button>
        </div>

        <div className='client-info'>
          <input onChange={(e) => this.changeString('firstName', e)} value={this.state.firstName} type='text' placeholder='First Name'/>
          <input onChange={(e) => this.changeString('lastName', e)} value={this.state.lastName} type='text' placeholder='Last Name'/>
          <input onChange={(e) => this.changeString('email', e)} value={this.state.email} type='email' placeholder='Email'/>
          <input onChange={(e) => this.changeString('phoneNumber', e)} value={this.state.phoneNumber} type='tel' placeholder='Phone Number'/>
        </div>
        
        <div className='client-home'>
          <input onChange={(e) => this.changeString('address', e)} value={this.state.address} type='text' placeholder='Address'/>
          <input onChange={(e) => this.changeString('apt', e)} value={this.state.apt} type='text' placeholder='Apt/Suite #'/>
          <input onChange={(e) => this.changeString('state', e)} value={this.state.state} type='email' placeholder='State'/>
          <input onChange={(e) => this.changeString('zipCode', e)} value={this.state.zipCode} type='tel' placeholder='Zip Code'/>
        </div>

        <div className='date-to-come'>
        <input type="date" id="myDate" value={this.state.date} onChange={this.updateDate}/>
        </div>

        <div className='how-to-access-home'>
          <select>
            <option value=''></option>
            <option value='I will be home'>I will be home</option>
            <option value='I will leave a key'>I will Leave a key</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='terms-and-conditions'>
          <p>PLEASE READ OUR TERMS</p>
          <p>We estimate a specific number of hours (displayed in labor-hours next to the final price--sending 2 cleaners cuts this time in half) for the service based on the information that is provided by the customer, and if we are unable to complete the work in the estimated amount of time then you will have the option to pay for extra time at our normal hourly rate or provide us with priorities that you would like us to complete in the time we have available. We require 48 hours cancellation notice to avoid the $100 cancellation fee on one time cleans and $50 for recurring cleans. </p>
          <button>I agree to these terms</button>
        </div>

        <div className='customer-comments'>
          <textarea placeholder='Special Instructions'></textarea>
        </div>

        <div className='tip'>
          <input type='number' />
        </div>

        <div className='payment-details'>
        </div>

        <div>
          <button>BOOK NOW</button>
        </div>
      </div>
      {/* <OutputContainer /> */}
      {/* <PriceResult /> */}
      {/* <TimePerMonth/> */}
      {/* <SquareFeet/> */}
      {/* <HeavyClean/> */}
      {/* <Submit /> */}
    </div>
  }
}